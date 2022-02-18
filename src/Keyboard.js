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
            <h3>Enter wish here:</h3>
            <p>{count}</p>
            <button className="key" onClick={a}>a</button>
            <button className="key" onClick={b}>b</button>
            <button className="key" onClick={c}>c</button>
            <button className="key" onClick={d}>d</button>
            <button className="key" onClick={e}>e</button>
            <button className="key" onClick={f}>f</button>
            <button className="key" onClick={g}>g</button>
            <button className="key" onClick={h}>h</button>
            <button className="key" onClick={i}>i</button>
            <button className="key" onClick={j}>j</button>
            <button className="key" onClick={k}>k</button>
            <button className="key" onClick={l}>l</button>
            <button className="key" onClick={m}>m</button>
            <button className="key" onClick={n}>n</button>
            <button className="key" onClick={o}>o</button>
            <br></br>
            <button className="key" onClick={p}>p</button>
            <button className="key" onClick={q}>q</button>
            <button className="key" onClick={r}>r</button>
            <button className="key" onClick={s}>s</button>
            <button className="key" onClick={t}>t</button>
            <button className="key" onClick={u}>u</button>
            <button className="key" onClick={v}>v</button>
            <button className="key" onClick={w}>w</button>
            <button className="key" onClick={x}>x</button>
            <button className="key" onClick={y}>y</button>
            <button className="key" onClick={z}>z</button>
            <button className="key2" onClick={()=> setCount('')}>Clear</button>
        </div>
    )
}

// in js you can have 1 default export
export default Keyboard

// you can have many export
export const x = 'whatever'
export const y = ()=>{console.log('y func')}
