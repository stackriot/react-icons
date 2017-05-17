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

var EggheadArrowUp = function EggheadArrowUp(props) {
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
                    { id: '\uD83D\uDC53Continue-Watching', transform: 'translate(-49.000000, -461.000000)' },
                    _react2.default.createElement(
                        'g',
                        { id: 'Group-2', transform: 'translate(49.000000, 461.000000)' },
                        _react2.default.createElement(
                            'g',
                            { id: 'Group-3' },
                            _react2.default.createElement('polygon', { id: 'ico-arrow-up', transform: 'translate(12.000000, 11.705000) scale(-1, 1) rotate(-180.000000) translate(-12.000000, -11.705000) ', points: '7.40999976 8 11.9999996 12.5799996 16.5899995 8 17.9999993 9.40999977 11.9999996 15.4099994 6 9.40999977' })
                        )
                    )
                )
            )
        )
    );
};

exports.default = EggheadArrowUp;
module.exports = exports['default'];