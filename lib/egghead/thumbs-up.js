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

var EggheadThumbsUp = function EggheadThumbsUp(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 24 24' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement(
                'g',
                { id: 'Admin', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
                _react2.default.createElement(
                    'g',
                    { id: 'Action-Cards', transform: 'translate(-798.000000, -325.000000)' },
                    _react2.default.createElement(
                        'g',
                        { id: '\uD83D\uDC4Dbutton_approve', transform: 'translate(790.000000, 319.000000)' },
                        _react2.default.createElement(
                            'g',
                            { id: 'ico_like', transform: 'translate(8.000000, 6.000000)' },
                            _react2.default.createElement(
                                'g',
                                null,
                                _react2.default.createElement('path', { d: 'M3,12.0190032 L3,19.2189714 C3,20.213467 3.80549644,21.0000635 4.79999205,21.0000635 L6.59998411,21.0000635 L6.59998411,10.2001112 L4.79999205,10.2001112 C3.80549644,10.2001112 3,11.0245076 3,12.0190032 M20.9360208,13.2195979 L19.3718277,19.1010719 C19.1144289,20.217967 18.1199332,21.0000635 16.9733383,21.0000635 L8.39997616,21.0000635 L8.39997616,10.2190111 L9.94706933,4.64353575 C10.1297685,3.45824098 11.3609631,2.6626445 12.6083576,3.14144238 C13.3544543,3.42854111 13.7999523,4.20523769 13.7999523,5.00533415 L13.7999523,9.31901511 C13.7999523,9.81581291 14.2031505,10.2001112 14.6999483,10.2001112 L18.5375314,10.2001112 C20.1206244,10.2001112 21.2915192,11.6779047 20.9360208,13.2195979' })
                            )
                        )
                    )
                )
            )
        )
    );
};

exports.default = EggheadThumbsUp;
module.exports = exports['default'];