import React, {useState} from 'react'

// props : {title:string}
const Keyboard = (props) => {
    // const [state, setState] = useState(initialState)
    const [count, setCount] = useState('')
    const a = ()=>{
        setCount(count + 'a')
    }
    const b = ()=>{
        setCount(count + 'b')
    }
    const c = ()=>{
        setCount(count + 'c')
    }
    const d = ()=>{
        setCount(count + 'd')
    }
    const e = ()=>{
        setCount(count + 'e')
    }
    const f = ()=>{
        setCount(count + 'f')
    }
    const g = ()=>{
        setCount(count + 'g')
    }
    const h = ()=>{
        setCount(count + 'h')
    }
    const i = ()=>{
        setCount(count + 'i')
    }
    const j = ()=>{
        setCount(count + 'j')
    }
    const k = ()=>{
        setCount(count + 'k')
    }
    const l = ()=>{
        setCount(count + 'l')
    }
    const m = ()=>{
        setCount(count + 'm')
    }
    const n = ()=>{
        setCount(count + 'n')
    }
    const o = ()=>{
        setCount(count + 'o')
    }
    const p = ()=>{
        setCount(count + 'p')
    }
    const q = ()=>{
        setCount(count + 'q')
    }
    const r = ()=>{
        setCount(count + 'r')
    }
    const s = ()=>{
        setCount(count + 's')
    }
    const t = ()=>{
        setCount(count + 't')
    }
    const u = ()=>{
        setCount(count + 'u')
    }
    const v = ()=>{
        setCount(count + 'v')
    }
    const w = ()=>{
        setCount(count + 'w')
    }
    const x = ()=>{
        setCount(count + 'x')
    }
    const y = ()=>{
        setCount(count + 'y')
    }
    const z = ()=>{
        setCount(count + 'z')
    }

    ////////////////////////
    //const backspace = ()=>{
    //    console.log('minus clicked')
    //    setCount(count - 1)
    //}


    return (
        <div>
            <h1>{props.x} {props.title}</h1>
            <h3>Input</h3>
            <p>{count}</p>
            <button onClick={a}>a</button>
            <button onClick={b}>b</button>
            <button onClick={c}>c</button>
            <button onClick={d}>d</button>
            <button onClick={e}>e</button>
            <button onClick={f}>f</button>
            <button onClick={g}>g</button>
            <button onClick={h}>h</button>
            <button onClick={i}>i</button>
            <button onClick={j}>j</button>
            <button onClick={k}>k</button>
            <button onClick={l}>l</button>
            <button onClick={m}>m</button>
            <button onClick={n}>n</button>
            <button onClick={o}>o</button>
            <button onClick={p}>p</button>
            <button onClick={q}>q</button>
            <button onClick={r}>r</button>
            <button onClick={s}>s</button>
            <button onClick={t}>t</button>
            <button onClick={u}>u</button>
            <button onClick={v}>v</button>
            <button onClick={w}>w</button>
            <button onClick={x}>x</button>
            <button onClick={y}>y</button>
            <button onClick={z}>z</button>
            <button onClick={()=> setCount('')}>Clear</button>
        </div>
    )
}

// in js you can have 1 default export
export default Keyboard

// you can have many export
export const x = 'whatever'
export const y = ()=>{console.log('y func')}