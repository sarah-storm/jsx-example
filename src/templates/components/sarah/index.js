import { h } from 'preact';

export const CTA = ({ href, title, summary, children, buttonText, buttonType, color }) => {
 
    let el = null;

    if(buttonText) {

        el = <div class={"cta"  + (color ? " cta--" + color : "")}>
            <div class="cta__bd">
                { title && <h1 class="cta__title">{title}</h1> }
                { summary && <div class="cta__summary">{summary}</div> }
                { children }
                <a href={href} class={"cta__btn" + (buttonType ? " cta__btn--" + buttonType : "")}>{buttonText}</a>
            </div>
        </div> 
        
    } else  {

        el = <a href={href} class="cta">
            <div class="cta__bd">
                { title && <h1 class="cta__title">{title}</h1> }
                { summary && <div class="cta__summary">{summary}</div> }
                { children }
            </div>
        </a>
    }
    
    return el;

};

export const Ghost = () => <div class="cta ghost">
    <div class="cta__bd">
        <div class="cta__title" />
        <div class="cta__summary" />
    </div>
</div>;

export const Empty = () => <div class="cta cta--empty" />;

export const Error = () => <div class="cta cta--error" />;

export default CTA;