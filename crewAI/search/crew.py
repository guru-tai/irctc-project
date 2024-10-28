from crewai import Task, Crew
from agents.java_analyzer import JavaTechnologyAnalyzerAgent
from agents.point_wise_response import PointWiseResponseAgent

# Define the tasks
task1 = Task(
    description="Check if the query is related to Java technology",
    expected_output="Boolean indicating if the query is related to Java technology",
    agent=JavaTechnologyAnalyzerAgent(),
)

task2 = Task(
    description="Provide a point-wise response for the query",
    expected_output="Point-wise formatted response",
    agent=PointWiseResponseAgent(),
    context=[task1],
)

# Create the crew
my_crew = Crew(agents=[JavaTechnologyAnalyzerAgent(), PointWiseResponseAgent()], tasks=[task1, task2])

# Function to run the crew
def run_crew(query):
    crew = my_crew.kickoff(inputs={"query": query})
    results = {}
    for task in crew.tasks:
        results[task.description] = task.output
    return results
