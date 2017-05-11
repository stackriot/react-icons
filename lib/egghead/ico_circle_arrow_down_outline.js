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

var EggheadIcoCircleArrowDownOutline = function EggheadIcoCircleArrowDownOutline(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 18 18' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement(
                'g',
                { id: 'Page-1', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
                _react2.default.createElement(
                    'g',
                    { id: 'ico_circle_arrow_down_outline' },
                    _react2.default.createElement('path', { d: 'M1,9 C1,13.4189747 4.58132574,17 9,17 C13.4189747,17 17,13.4186743 17,9 C17,4.58102534 13.4186743,1 9,1 C4.58102534,1 1,4.58132574 1,9 Z M0,9 C0,4.02943725 4.02834436,0 9,0 C13.9705627,0 18,4.02834436 18,9 C18,13.9705627 13.9716556,18 9,18 C4.02943725,18 0,13.9716556 0,9 Z', id: 'bubble', fillRule: 'nonzero', transform: 'translate(9.000000, 9.000000) rotate(-90.000000) translate(-9.000000, -9.000000) ' }),
                    _react2.default.createElement('polygon', { id: 'arrow', transform: 'translate(10.000000, 9.000000) rotate(-90.000000) translate(-10.000000, -9.000000) ', points: '6.17499987 6 10 9.70850198 13.8250001 6 15 7.14170031 10 12 5 7.14170031' })
                )
            )
        )
    );
};

exports.default = EggheadIcoCircleArrowDownOutline;
module.exports = exports['default'];