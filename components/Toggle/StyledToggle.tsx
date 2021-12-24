import styled from 'styled-components';

export default styled.div`
    --altamoon-toggle-buy-color: var(--altamoon-buy-color, #008765);
    --altamoon-toggle-sell-color: var(--altamoon-sell-color, #673ab7);

    position: relative;
    & *, & *::after, & *:after {
        box-sizing: border-box;
    }
    & input[type="checkbox"] {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
    }
    & input[type="checkbox"][disabled] ~ label {
        pointer-events: none;
    }
    & input[type="checkbox"][disabled] ~ label .switch {
        opacity: 0.4;
    }
    & input[type="checkbox"]:checked ~ label .switch::before {
        content: attr(data-unchecked);
        left: 0;
    }
    & input[type="checkbox"]:checked ~ label .switch::after {
        content: attr(data-checked);
    }
    & label {
        user-select: none;
        position: relative;
        display: flex;
        align-items: center;
        color: #666;
    }
    & label .switch {
        position: relative;
    }
    & label .switch::before {
        content: attr(data-checked);
        position: absolute;
        top: 0;
        text-transform: uppercase;
        text-align: center;
    }
    & label .switch::after {
        content: attr(data-unchecked);
        position: absolute;
        z-index: 5;
        text-transform: uppercase;
        text-align: center;
        background: rgba(255, 255, 255, 0.3);
        transform: translate3d(0, 0, 0);
    }
    & input[type="checkbox"][disabled] ~ label {
        color: rgba(119, 119, 119, 0.5);
    }
    & label .switch {
        transition: background-color 0.3s cubic-bezier(0, 1, 0.5, 1);
        background-color: #444;
    }
    & label .switch::after {
        color: rgba(255, 255, 255, 1);
    }
    & label .switch::after {
        transition: transform 0.3s cubic-bezier(0, 1, 0.5, 1);
        color: #999;
    }
    & input[type="checkbox"]:focus ~ label .switch::after, & input[type="checkbox"]:hover ~ label .switch::after {
        box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4);
    }
    & input[type="checkbox"]:checked ~ label .switch::after {
        transform: translate3d(100%, 0, 0);
    }
    & input[type="checkbox"]:checked:focus ~ label .switch::after, & input[type="checkbox"]:checked:hover ~ label .switch::after {
        box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4);
    }
    & label .switch {
        height: 44px;
        flex: 0 0 100%;
        border-radius: 4px;
    }
    & label .switch::before {
        left: 50%;
        font-size: 0.9rem;
        line-height: 44px;
        width: 50%;
        padding: 0 12px;
    }
    & label .switch::after {
        top: 2px;
        left: 2px;
        border-radius: 2px;
        width: calc(50% - 2px);
        line-height: calc(44px - 4px);
        font-size: 0.9rem;
    }
    & label .switch:hover::after {
        box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4);
    }

    & input[type="checkbox"] ~ label .switch::after {
        background: var(--altamoon-toggle-buy-color);
        color: #fff;
    }

    & input[type="checkbox"]:checked ~ label .switch::after {
        background: var(--altamoon-toggle-sell-color);
        color: #fff;
    }
`;
