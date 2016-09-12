angular.module('starter.controllers', [])

.controller('StoryCtrl', function($scope) {
  $scope.images = [
    {
      'url' : './img/00.jpg',
      'title' : '사진'
    },{
      'url' : './img/01.jpg',
      'title' : '사진'
    },{
      'url' : './img/06.jpg',
      'title' : '사진'
    },{
      'url' : './img/07.jpg',
      'title' : '사진'
    },{
      'url' : './img/08.jpg',
      'title' : '사진'
    },{
      'url' : './img/09.jpg',
      'title' : '사진'
    },{
      'url' : './img/10.jpg',
      'title' : '사진'
    },{
      'url' : './img/11.jpg',
      'title' : '사진'
    },{
      'url' : './img/12.jpg',
      'title' : '사진'
    },{
      'url' : './img/13.jpg',
      'title' : '사진'
    },{
      'url' : './img/14.jpg',
      'title' : '사진'
    },{
      'url' : './img/15.jpg',
      'title' : '사진'
    },{
      'url' : './img/16.jpg',
      'title' : '사진'
    },{
      'url' : './img/17.jpg',
      'title' : '사진'
    },{
      'url' : './img/18.jpg',
      'title' : '사진'
    },{
      'url' : './img/19.jpg',
      'title' : '사진'
    },{
      'url' : './img/20.jpg',
      'title' : '사진'
    },{
      'url' : './img/21.jpg',
      'title' : '사진'
    }
  ]
})
.controller('GalleryCtrl', function($scope) {})

.controller('CommentCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.fbComments = 'http://developers.facebook.com/docs/plugins/comments/';
})

.controller('LocationCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
.directive('fbCommentBox', function() {
  function createHTML(href, numposts, colorscheme, width, order) {
    return '<div class="fb-comments" ' +
      'data-href="' + href + '" ' +
      'data-numposts="' + numposts + '" ' +
      'data-colorsheme="' + colorscheme + '" ' +
      'data-width="' + width + '">' +
      'data-order-by="' + order +'">' +
      '</div>';
  }
  return {
    restrict: 'A',
    scope: {},
    link: function postLink(scope, elem, attrs) {
      attrs.$observe('pageHref', function(newValue) {
        var href = newValue;
        var numposts = attrs.numposts || 5;
        var colorscheme = attrs.colorscheme || 'light';
        var width = attrs.width || '100%';
        var order = attrs.orderBy || 'reverse_time';
        elem.html(createHTML(href, numposts, colorscheme, width, order));
        if(typeof FB !== 'undefined') {
          FB.XFBML.parse(elem[0]);
        }
      });
    }
  };
});
