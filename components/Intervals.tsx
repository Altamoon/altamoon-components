import React, { ReactElement } from 'react';
import styled from 'styled-components';

const IntervalsWrapper = styled.div`
  padding-bottom: 1rem;
  flex-wrap: nowrap!important;
  overflow: auto;  
`;

const IntervalItem = styled.div`
  & > span {
    padding: 0.5rem 0.75rem;
  }
`;

export type CandlestickChartInterval = '1m' | '3m' | '5m' | '15m' | '30m' | '1h' | '2h' | '4h' | '6h' | '8h' | '12h' | '1d' | '3d' | '1w' | '1M';

const futuresIntervals: CandlestickChartInterval[] = [
  '1m', '3m', '5m', '15m', '30m', '1h', '2h', '4h', '6h', '8h', '12h', '1d', '3d', '1w', '1M',
];

interface Props {
  value: CandlestickChartInterval;
  onChange: (v: CandlestickChartInterval) => void;
}

const Intervals = ({ value, onChange }: Props): ReactElement => (
  <IntervalsWrapper className="nav nav-pills">
    {futuresIntervals.map((intervalsItem, index) => (
      <IntervalItem
        role="button"
        tabIndex={index}
        className="nav-item cursor-pointer"
        key={intervalsItem}
        onClick={() => { onChange(intervalsItem); }}
        onKeyDown={() => { onChange(intervalsItem); }}
      >
        <span className={`nav-link ${intervalsItem === value ? 'active' : ''}`}>
          {intervalsItem}
        </span>
      </IntervalItem>
    ))}
  </IntervalsWrapper>
);

export default Intervals;
