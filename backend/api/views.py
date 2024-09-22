# views.py

from rest_framework import viewsets
from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer, UserSerializer
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get_queryset(self):
        queryset = Product.objects.all()
        category = self.request.query_params.get('category')
        if category:
            queryset = queryset.filter(category__name=category)
        return queryset
    
    def update(self, request, *args, **kwargs):
        partial = True  # Allow partial updates
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)

        if serializer.is_valid():
            if 'image' not in request.data:
                serializer.validated_data.pop('image', None) 
            
            self.perform_update(serializer)
            return Response(serializer.data)
        
        return Response(serializer.errors, status=400)  # Return errors if validation fails

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def admin_data(request):
    # Only accessible to authenticated users
    return Response({'message': 'This is the admin data'})

# URL patterns
from django.urls import path

urlpatterns = [
    path('api/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/admin-data/', admin_data, name='admin-data'),  # Protected admin data route
]
    
