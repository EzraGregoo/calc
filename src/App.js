import React, { useState, useEffect } from 'react';
import './styles.css';
import _ from 'lodash';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from './theme/GlobalStyles';
import { useTheme } from './theme/useTheme';
import { getFromLS } from './utils/storage';

function App() {
    const themesFromStore = getFromLS('all-themes');
    const [data, setData] = useState(themesFromStore.data);

    const {theme, themeLoaded} = useTheme();
    const [selectedTheme, setSelectedTheme] = useState(theme);

    const [val, setVal] = useState('');
    const [display, setDisplay] = useState('');

    useEffect(() => {
        setSelectedTheme(theme);
    }, [themeLoaded]);

    useEffect(() => {
        document.body.classList.add('transition');
    },[])

    const switcherTgl = document.getElementById('switcherTgl');

    const handleClick = (e) => {
        const tglId = e.target.id;
        if (tglId === '1'){
            switcherTgl.style.transform = 'translateX(0)';
            setSelectedTheme(data.first);
        } else if(tglId === '2'){
            switcherTgl.style.transform = 'translateX(28px)';
            setSelectedTheme(data.second);
        } else {
            switcherTgl.style.transform = 'translateX(56px)';
            setSelectedTheme(data.third);
        }
    }
    const pseudoSwitch = document.getElementsByClassName('pseudo-switcher');
    for (const elmnt of pseudoSwitch){
        elmnt.addEventListener('click', handleClick)
    }
    const oprButtons =  document.getElementsByClassName('opr-btn');
    for (const elmnt of oprButtons){
        if(elmnt.innerHTML !== 'x'){
            elmnt.value = elmnt.innerHTML;
            elmnt.addEventListener('click', (e)=>{
                setVal(val + e.target.value);
                setDisplay(display + e.target.value);
            })
        }
    }
    const backspace = ()=>{
        try {
            setVal(val.slice(0, -1));
            setDisplay(val.slice(0, -1));
        } catch (error) {
            
        }
    }
    const reset = ()=>{
        try {
            setVal('');
            setDisplay('');
        } catch (error) {
            
        }
    }
    const multiply = (e)=>{
        try {
            setVal(val + e.target.value);
            setDisplay(display+'x');
        } catch (error) {
            
        }
    }
    const calculate = ()=>{
        try {
            setVal(eval(val));
            setDisplay(eval(val));
        } catch (error) {
            setVal('');
            setDisplay('error!');
        }
    }
    return (
        <>
        {
            themeLoaded && <ThemeProvider theme={ selectedTheme }>
                <GlobalStyles />
                    <div className='content'>
                        <div className='flex items-end justify-between'>
                            <h1>calc</h1>
                            <div className='flex gap-7 items-end'>
                                <h3 className='text-[1.15rem]'>THEME</h3>
                                <div className='flex flex-col'>
                                    <div className='flex text-[1.2rem] justify-around'>
                                        <span>1</span><span>2</span><span>3</span>
                                    </div>
                                    <div className='switcher relative bg-slate-700 p-2 rounded-full flex gap-2'>
                                        <span className='pseudo-switcher z-10' id="1"></span>
                                        <span className='pseudo-switcher z-10' id="2"></span>
                                        <span className='pseudo-switcher z-10' id="3"></span>
                                        <span className='absolute bg-red-500 switcher-tgl' id='switcherTgl'></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <input className='screen px-5 py-4 mt-10 rounded-xl text-right bg-red-200 text-[1.25em] md:text-[1em] md:mt-8'
                                value={display}
                                readOnly
                            />
                            <div className='buttons flex flex-col p-5 rounded-xl bg-red-200 gap-6 md:text-[27.5px]'>
                                <div className='flex justify-between'>
                                    <button className='button regular-size-btn first-btn opr-btn'>7</button>
                                    <button className='button regular-size-btn first-btn opr-btn'>8</button>
                                    <button className='button regular-size-btn first-btn opr-btn'>9</button>
                                    <button 
                                    className='button regular-size-btn sec-btn'
                                    onClick={backspace}
                                    >DEL</button>
                                </div>
                                <div className='flex justify-between'>
                                    <button className='button regular-size-btn first-btn opr-btn'>4</button>
                                    <button className='button regular-size-btn first-btn opr-btn'>5</button>
                                    <button className='button regular-size-btn first-btn opr-btn'>6</button>
                                    <button className='button regular-size-btn first-btn opr-btn'>+</button>
                                </div>
                                <div className='flex justify-between'>
                                    <button className='button regular-size-btn first-btn opr-btn'>1</button>
                                    <button className='button regular-size-btn first-btn opr-btn'>2</button>
                                    <button className='button regular-size-btn first-btn opr-btn'>3</button>
                                    <button className='button regular-size-btn first-btn opr-btn'>-</button>
                                </div>
                                <div className='flex justify-between'>
                                    <button className='button regular-size-btn first-btn opr-btn'>.</button>
                                    <button className='button regular-size-btn first-btn opr-btn'>0</button>
                                    <button className='button regular-size-btn first-btn opr-btn'>/</button>
                                    <button className='button regular-size-btn first-btn opr-btn' value='*' onClick={multiply}>x</button>
                                </div>
                                <div className='flex justify-between'>
                                    <button 
                                    className='button big-btn sec-btn'
                                    onClick={reset}
                                    >RESET</button>
                                    <button className='button big-btn third-btn' onClick={calculate}>=</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </ThemeProvider>
        }
        </>
    )
}

export default App;