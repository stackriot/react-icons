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

var EggheadProgressRing = function EggheadProgressRing(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 45 45' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement(
                'title',
                null,
                'progress-ring'
            ),
            _react2.default.createElement(
                'desc',
                null,
                'Created with Sketch.'
            ),
            _react2.default.createElement('defs', null),
            _react2.default.createElement(
                'g',
                { id: 'Styleguide', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd', strokeLinejoin: 'round' },
                _react2.default.createElement(
                    'g',
                    { transform: 'translate(-277.000000, -3992.000000)', id: 'progress-ring' },
                    _react2.default.createElement(
                        'g',
                        { transform: 'translate(276.000000, 3991.000000)' },
                        _react2.default.createElement('circle', { id: 'ring', stroke: '#181E28', strokeWidth: '3', opacity: '0.300000012', strokeLinecap: 'square', cx: '24', cy: '24', r: '20' }),
                        _react2.default.createElement('path', { d: 'M23.4871795,4 C18.1059435,4 13.2341486,6.18117686 9.70766273,9.70766273 C6.18117686,13.2341486 4,18.1059435 4,23.4871795', id: 'progress', stroke: '#FD9126', strokeWidth: '5' })
                    )
                )
            )
        )
    );
};

exports.default = EggheadProgressRing;
module.exports = exports['default'];