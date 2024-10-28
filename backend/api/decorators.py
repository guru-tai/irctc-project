from django.http import JsonResponse
from django.conf import settings

def admin_required(view_func):
    def _wrapped_view(request, *args, **kwargs):
        api_key = request.headers.get('X-API-KEY')
        if api_key == settings.ADMIN_API_KEY:
            return view_func(request, *args, **kwargs)
        return JsonResponse({'error': 'Unauthorized'}, status=401)
    return _wrapped_view
