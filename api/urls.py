from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from api.views import TaskViewSet, UserViewSet, ManageUserView


router = routers.DefaultRouter()
router.register('tasls', TaskViewSet)
router.register('users', UserViewSet)

urlpatterns = [
    # ModelViewSetsを継承して作ったviewsはrouterが使える
    path('myself/', ManageUserView.as_view(), name='myself'),
    path('', include(router.urls))
]
