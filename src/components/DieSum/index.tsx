// Type imports
import { DieHistoryType } from '../../App';

// Style imports
import './styles.scss';

// Component props
interface DieSumProps {
    rolls: DieHistoryType[];
    modifierFunction: (action: 'sub' | 'add') => void;
}


// Component declaration and export
export const DieSum = ({ rolls, modifierFunction }: DieSumProps) => {

    return (
        <div className="dieSum-styled">
            {rolls.length ?
                <>
                    <div className="addSubtract-button" onClick={() => modifierFunction('sub')}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#9a9a9a" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                        </svg>
                    </div>

                    <div className="totalValue">
                        {rolls.reduce((acc, cur) => acc + cur.value, 0)}
                    </div>

                    <div className="addSubtract-button" onClick={() => modifierFunction('add')}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#9a9a9a" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>
                </>

                :

                <>
                    <div className="quote">
                        <p className="quote-text">
                            "{"Be carefull not to choke on your aspirations."}"
                        </p>
                        <p className="quote-author">
                            {"Darth Vader"}
                        </p>
                    </div>
                </>
            }
        </div>
    );
};