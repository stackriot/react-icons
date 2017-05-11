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

var EggheadIcoStarFill = function EggheadIcoStarFill(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 20 19' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement(
                'g',
                { id: 'Page-1', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
                _react2.default.createElement(
                    'g',
                    { id: 'ico_star_fill' },
                    _react2.default.createElement('path', { d: 'M9.96969014,15.7015458 L15.0619178,18.7750096 C16.0111183,19.3479088 16.5767761,18.9386381 16.3245078,17.8572679 L14.9731728,12.0646526 L19.4721303,8.16720381 C20.3107441,7.44071231 20.0969927,6.77596307 18.9910109,6.68213157 L13.0665581,6.17950099 L10.7511607,0.716480204 C10.3195664,-0.301836754 9.6204598,-0.303361096 9.18821931,0.716480204 L6.87282105,6.17950099 L0.948369094,6.68213157 C-0.15595947,6.77582282 -0.37261906,7.43962481 0.467250236,8.16720381 L4.96620848,12.0646526 L3.61487316,17.8572679 C3.36298181,18.9370218 3.92684159,19.3487664 4.87746285,18.7750096 L9.96969014,15.7015458 Z', id: 'ico_star_filled' })
                )
            )
        )
    );
};

exports.default = EggheadIcoStarFill;
module.exports = exports['default'];