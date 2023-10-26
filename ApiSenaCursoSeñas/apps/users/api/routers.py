from rest_framework.routers import DefaultRouter

from apps.users.api.views.RoleView import RoleViewSet
from apps.users.api.views.UserView import UserViewSet
from apps.categories.api.views.CategoryView import CategoryViewSet
from apps.videos.api.views.VideoView import VideoViewSet
from apps.novelties.api.views.NoveliteView import NoveltieViewSet
from apps.Discussion.api.views.DiscussionView import DiscussionViewSet
from apps.Comment.api.views.CommentView import CommentViewSet
from apps.CollaborationQuestions.api.views.QuestionView import QuestionViewSet
from apps.CollaborationAnswer.api.views.AswerView import AnswerViewSet



router = DefaultRouter()

router.register(r'users', UserViewSet, basename='user')
router.register(r'roles', RoleViewSet, basename='role')
router.register(r'categories', CategoryViewSet, basename='categories')
router.register(r'videos', VideoViewSet, basename='videos')
router.register(r'novelties', NoveltieViewSet, basename='novelties')
router.register(r'discussion', DiscussionViewSet, basename='discussion')
router.register(r'comment', CommentViewSet, basename='comment')
router.register(r'CollaborationQuestions', QuestionViewSet, basename='CollaborationQuestions')
router.register(r'CollaborationAnswer', AnswerViewSet, basename='CollaborationAnswer')

urlpatterns = router.urls