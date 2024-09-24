from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, ProductViewSet #admin_data
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'products', ProductViewSet)

urlpatterns = [
    path('api/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # Add login path here
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'), #TODO add it to frontend
    #path('api/admin-data/', admin_data, name='admin-data'),  # Protected admin data route
    path('api/', include(router.urls)),
]
