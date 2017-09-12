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

var StackriotArrowRight = function StackriotArrowRight(props) {
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
                    { id: '\uD83D\uDC53Continue-Watching', transform: 'translate(-194.000000, -461.000000)' },
                    _react2.default.createElement(
                        'g',
                        { id: 'Group-2', transform: 'translate(49.000000, 461.000000)' },
                        _react2.default.createElement(
                            'g',
                            { id: 'ico-arrow-left', transform: 'translate(145.000000, 0.000000)' },
                            _react2.default.createElement('polygon', { id: 'ico-arrow-right', transform: 'translate(12.205000, 11.799987) rotate(-90.000000) translate(-12.205000, -11.799987) ', points: '7.61499982 8.09498773 12.2049997 12.6749873 16.7949995 8.09498773 18.2049993 9.5049875 12.2049997 15.5049871 6.20500006 9.5049875' })
                        )
                    )
                )
            )
        )
    );
};

exports.default = StackriotArrowRight;
module.exports = exports['default'];