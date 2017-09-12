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

var EggheadTimerPlus = function EggheadTimerPlus(props) {
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
                    { id: 'Action-Cards', transform: 'translate(-514.000000, -746.000000)' },
                    _react2.default.createElement(
                        'g',
                        { id: 'Group-64', transform: 'translate(442.000000, 684.000000)' },
                        _react2.default.createElement(
                            'g',
                            { id: 'Group-15', transform: 'translate(72.000000, 62.000000)' },
                            _react2.default.createElement('path', { d: 'M7.88000011,3.51936487 L6.5999999,2.00000036 L2,5.82323765 L3.28999996,7.34260181 L7.88000011,3.51936463 L7.88000011,3.51936487 Z M22,5.8331679 L17.3999996,2 L16.1100006,3.51936439 L20.7100009,7.35253253 L22,5.8331679 Z M12,4.12512444 C7.02999973,4.12512444 3,8.12711114 3,13.0625622 C3,17.9980133 7.01999998,22 12,22 C16.9700012,22 21,17.9980133 21,13.0625622 C21,8.12711114 16.9699993,4.12512444 12,4.12512444 Z M12,20.0139027 C8.13000011,20.0139027 5,16.9056594 5,13.0625622 C5,9.21946503 8.13000011,6.11122173 12,6.11122173 C15.8699998,6.11122173 19,9.21946409 19,13.0625622 C19,16.9056594 15.8699998,20.0139027 12,20.0139027 Z M13,9.09036765 L11,9.09036765 L11,12.0695136 L8,12.0695136 L8,14.0556109 L11,14.0556109 L11,17.0347568 L13,17.0347568 L13,14.0556109 L16,14.0556109 L16,12.0695136 L13,12.0695136 L13,9.09036765 Z', id: 'timerPlus' })
                        )
                    )
                )
            )
        )
    );
};

exports.default = EggheadTimerPlus;
module.exports = exports['default'];