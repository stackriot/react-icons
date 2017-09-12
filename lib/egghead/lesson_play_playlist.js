'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = require('react-icon-base');

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EggheadLessonPlayPlaylist = function EggheadLessonPlayPlaylist(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 38 38' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement(
                'g',
                { id: 'Page-1', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
                _react2.default.createElement(
                    'g',
                    { id: 'lesson_play_playlist' },
                    _react2.default.createElement('path', { d: 'M19,0 C29.4880008,0 38,8.51199913 38,19 C38,29.4880008 29.4880008,38 19,38 C8.51200002,38 0,29.4880008 0,19 C0,8.51200002 8.51200002,0 19,0 Z M16.084074,26.8237297 L26.3266403,19.6539333 C26.7744403,19.3404733 26.7774244,18.8267786 26.3266403,18.5112297 L16.084074,11.3414333 C15.636274,11.0279733 15.2678571,11.2134011 15.2678571,11.7602635 L15.2678571,26.4048995 C15.2678571,26.9504029 15.6332899,27.1392786 16.084074,26.8237297 Z' })
                )
            )
        )
    );
};

exports.default = EggheadLessonPlayPlaylist;
module.exports = exports['default'];