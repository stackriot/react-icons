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

var EggheadArrowDown = function EggheadArrowDown(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 24 24' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement(
                'g',
                { id: 'Symbols', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
                _react2.default.createElement(
                    'g',
                    { id: '\uD83D\uDC53Continue-Watching', transform: 'translate(-79.000000, -461.000000)' },
                    _react2.default.createElement(
                        'g',
                        { id: 'Group-2', transform: 'translate(49.000000, 461.000000)' },
                        _react2.default.createElement(
                            'g',
                            { id: 'ico-arrow-down', transform: 'translate(30.000000, 0.000000)' },
                            _react2.default.createElement('polygon', { transform: 'translate(12.000000, 12.705000) scale(-1, 1) translate(-12.000000, -12.705000) ', points: '7.40999976 9 11.9999996 13.5799996 16.5899995 9 17.9999993 10.4099998 11.9999996 16.4099994 6 10.4099998' })
                        )
                    )
                )
            )
        )
    );
};

exports.default = EggheadArrowDown;
module.exports = exports['default'];