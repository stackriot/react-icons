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

var EggheadArrowLeft = function EggheadArrowLeft(props) {
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
                    { id: '\uD83D\uDC53Continue-Watching', transform: 'translate(-138.000000, -461.000000)' },
                    _react2.default.createElement(
                        'g',
                        { id: 'Group-2', transform: 'translate(49.000000, 461.000000)' },
                        _react2.default.createElement(
                            'g',
                            { id: 'ico-arrow-left', transform: 'translate(89.000000, 0.000000)' },
                            _react2.default.createElement('polygon', { transform: 'translate(11.705000, 11.705000) scale(-1, 1) rotate(-90.000000) translate(-11.705000, -11.705000) ', points: '7.11499982 8 11.7049997 12.5799996 16.2949995 8 17.7049993 9.40999977 11.7049997 15.4099994 5.70500006 9.40999977' })
                        )
                    )
                )
            )
        )
    );
};

exports.default = EggheadArrowLeft;
module.exports = exports['default'];