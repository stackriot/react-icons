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

var EggheadArrowRightLong = function EggheadArrowRightLong(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 20 12' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement(
                'g',
                { fillRule: 'evenodd' },
                _react2.default.createElement('polygon', { points: '12 10.59 16.58 6 12 1.41 13.41 0 19.41 6 13.41 12' }),
                _react2.default.createElement('rect', { width: '18', height: '2', y: '5' })
            )
        )
    );
};

exports.default = EggheadArrowRightLong;
module.exports = exports['default'];