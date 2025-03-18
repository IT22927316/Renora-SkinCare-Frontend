import React, { useRef, useEffect } from 'react';
import './TouchPause.css';

import cleanserimg from '../../assets/products/cleanser.jpg';
import serumimg from '../../assets/products/serum.jpg'
import moisturizerimg from '../../assets/products/moisturizers.jpg'
import mascaraimg from '../../assets/products/mascara.jpg'
import facewashimg from '../../assets/products/facewash.jpg'
import primerimg from '../../assets/products/primer.jpg'
import tonerimg from '../../assets/products/toner.jpg'
import suncreamimg from '../../assets/products/suncream.jpg'
import lipbalmimg from '../../assets/products/lipbalm.jpg';
import bodyscrubimg from '../../assets/products/bodyscrub.jpg';
import ampuleimg from '../../assets/products/ampule.jpg';
import essenceimg from '../../assets/products/essence.jpg';

const TouchPause: React.FC = () => {
    const items = [
        { id: 1, img: cleanserimg, label: 'C L E A N S E R S' },
        { id: 2, img: serumimg, label: 'S E R U M S' },
        { id: 3, img: moisturizerimg, label: 'M O I S T U R I Z E R S' },
        { id: 4, img: mascaraimg, label: 'M A S C A R A' },
        { id: 5, img: facewashimg, label: 'F A C E W A S H' },
        { id: 6, img: tonerimg, label: 'T O N E R S' },
        { id: 7, img: lipbalmimg, label: 'L I P C A R E' },
        { id: 8, img: suncreamimg, label: 'S U N C R E A M' },
        { id: 9, img: primerimg, label: 'P R I M E R' },
        { id: 10, img: bodyscrubimg, label: 'B O D Y S C R U B' },
        { id: 11, img: ampuleimg, label: 'A M P O U L E S' },
        { id: 12, img: essenceimg, label: 'E S S E N C E' }
    ];

    const listRef = useRef<HTMLDivElement>(null);
    const quantity = items.length;

    useEffect(() => {
        if (listRef.current) {
            const itemWidth = 250; 
            const totalWidth = (itemWidth + 30) * quantity; 
            listRef.current.style.setProperty('--width', totalWidth + 'px');
        }
    }, [quantity]);

    return (
        <div className="automated-slider" style={{ '--quantity': quantity, '--gap': '30px' } as React.CSSProperties}>
            <div className="list" ref={listRef}>
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className="item"
                        style={{ '--position': index + 1 } as React.CSSProperties}
                    >
                        <img src={item.img} alt={item.label} />
                        <div style={{ marginTop: '10px', padding: '10px', textAlign: 'center' }}>
                            <p className="prata-regular">{item.label}</p>
                        </div>
                    </div>
                ))}
                {items.map((item, index) => (
                    <div
                        key={`${item.id}-duplicate`}
                        className="item"
                        style={{ '--position': index + 1 } as React.CSSProperties}
                    >
                        <img src={item.img} alt={item.label} />
                        <div style={{ marginTop: '10px', padding: '10px', textAlign: 'center' }}>
                            <p className="prata-regular font-bold">{item.label}</p>
                        </div>
                    </div>
                ))}
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className="item"
                        style={{ '--position': index + 1 } as React.CSSProperties}
                    >
                        <img src={item.img} alt={item.label} />
                        <div style={{ marginTop: '10px', padding: '10px', textAlign: 'center' }}>
                            <p className="prata-regular">{item.label}</p>
                        </div>
                    </div>
                ))}
                {items.map((item, index) => (
                    <div
                        key={`${item.id}-duplicate`}
                        className="item"
                        style={{ '--position': index + 1 } as React.CSSProperties}
                    >
                        <img src={item.img} alt={item.label} />
                        <div style={{ marginTop: '10px', padding: '10px', textAlign: 'center' }}>
                            <p className="prata-regular font-bold">{item.label}</p>
                        </div>
                    </div>
                ))}
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className="item"
                        style={{ '--position': index + 1 } as React.CSSProperties}
                    >
                        <img src={item.img} alt={item.label} />
                        <div style={{ marginTop: '10px', padding: '10px', textAlign: 'center' }}>
                            <p className="prata-regular">{item.label}</p>
                        </div>
                    </div>
                ))}
                {items.map((item, index) => (
                    <div
                        key={`${item.id}-duplicate`}
                        className="item"
                        style={{ '--position': index + 1 } as React.CSSProperties}
                    >
                        <img src={item.img} alt={item.label} />
                        <div style={{ marginTop: '10px', padding: '10px', textAlign: 'center' }}>
                            <p className="prata-regular font-bold">{item.label}</p>
                        </div>
                    </div>
                ))}
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className="item"
                        style={{ '--position': index + 1 } as React.CSSProperties}
                    >
                        <img src={item.img} alt={item.label} />
                        <div style={{ marginTop: '10px', padding: '10px', textAlign: 'center' }}>
                            <p className="prata-regular">{item.label}</p>
                        </div>
                    </div>
                ))}
                {items.map((item, index) => (
                    <div
                        key={`${item.id}-duplicate`}
                        className="item"
                        style={{ '--position': index + 1 } as React.CSSProperties}
                    >
                        <img src={item.img} alt={item.label} />
                        <div style={{ marginTop: '10px', padding: '10px', textAlign: 'center' }}>
                            <p className="prata-regular font-bold">{item.label}</p>
                        </div>
                    </div>
                ))}
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className="item"
                        style={{ '--position': index + 1 } as React.CSSProperties}
                    >
                        <img src={item.img} alt={item.label} />
                        <div style={{ marginTop: '10px', padding: '10px', textAlign: 'center' }}>
                            <p className="prata-regular">{item.label}</p>
                        </div>
                    </div>
                ))}
                {items.map((item, index) => (
                    <div
                        key={`${item.id}-duplicate`}
                        className="item"
                        style={{ '--position': index + 1 } as React.CSSProperties}
                    >
                        <img src={item.img} alt={item.label} />
                        <div style={{ marginTop: '10px', padding: '10px', textAlign: 'center' }}>
                            <p className="prata-regular font-bold">{item.label}</p>
                        </div>
                    </div>
                ))}
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className="item"
                        style={{ '--position': index + 1 } as React.CSSProperties}
                    >
                        <img src={item.img} alt={item.label} />
                        <div style={{ marginTop: '10px', padding: '10px', textAlign: 'center' }}>
                            <p className="prata-regular">{item.label}</p>
                        </div>
                    </div>
                ))}
                {items.map((item, index) => (
                    <div
                        key={`${item.id}-duplicate`}
                        className="item"
                        style={{ '--position': index + 1 } as React.CSSProperties}
                    >
                        <img src={item.img} alt={item.label} />
                        <div style={{ marginTop: '10px', padding: '10px', textAlign: 'center' }}>
                            <p className="prata-regular font-bold">{item.label}</p>
                        </div>
                    </div>
                ))}
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className="item"
                        style={{ '--position': index + 1 } as React.CSSProperties}
                    >
                        <img src={item.img} alt={item.label} />
                        <div style={{ marginTop: '10px', padding: '10px', textAlign: 'center' }}>
                            <p className="prata-regular">{item.label}</p>
                        </div>
                    </div>
                ))}
                {items.map((item, index) => (
                    <div
                        key={`${item.id}-duplicate`}
                        className="item"
                        style={{ '--position': index + 1 } as React.CSSProperties}
                    >
                        <img src={item.img} alt={item.label} />
                        <div style={{ marginTop: '10px', padding: '10px', textAlign: 'center' }}>
                            <p className="prata-regular font-bold">{item.label}</p>
                        </div>
                    </div>
                ))}
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className="item"
                        style={{ '--position': index + 1 } as React.CSSProperties}
                    >
                        <img src={item.img} alt={item.label} />
                        <div style={{ marginTop: '10px', padding: '10px', textAlign: 'center' }}>
                            <p className="prata-regular">{item.label}</p>
                        </div>
                    </div>
                ))}
                {items.map((item, index) => (
                    <div
                        key={`${item.id}-duplicate`}
                        className="item"
                        style={{ '--position': index + 1 } as React.CSSProperties}
                    >
                        <img src={item.img} alt={item.label} />
                        <div style={{ marginTop: '10px', padding: '10px', textAlign: 'center' }}>
                            <p className="prata-regular font-bold">{item.label}</p>
                        </div>
                    </div>
                ))}
            </div>
            <br />
        </div>
    );
};

export default TouchPause;
