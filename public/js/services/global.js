angular.module('picasso.services.global', [])
  .factory('Global', [
    function() {
        var _this = this;
        _this._data = {
            header: window.header
        };
        return _this._data;
    }
  ]);
