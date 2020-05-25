import React from 'react';
import { CheckBox } from '../../components/ReusableComponents/CheckBox';

const ChecklistsPrepayElec = () => {
    return (
        <div>
            <div style={{ maxWidth: "800px", margin: "10px auto" }}>
                <div className="ui container">
                    <div className="ui segment">
                        <h2 style={{ textAlign: "center" }}>Prepay Electricity Checklist</h2>

                        <div className="list">
                            <div className="item">
                                <div className="ui child checkbox">
                                    <CheckBox label={(<b>{"1. Are they off supply?"}</b>)} />
                                    <p>If yes and it’s not a key error, due to the <a href="https://bulbenergy.atlassian.net/wiki/spaces/OP/pages/15794264/Members+off+supply" target="_blank" rel="noopener noreferrer">RCD switch</a>, a power cut at the DNO’s end or because they need DC, refer to the EMT</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="ui child checkbox">
                                    <CheckBox label={(<b>{"2. Do they have debt on the meter?"}</b>)} />
                                    <p>Ask for pictures of Display A, B and S (All elec screens <a href="https://docs.google.com/spreadsheets/d/1Lz_D5eW8ULogXhO5XF54ET7dOi2Ixd871srUadSXpq0/edit#gid=0" target="_blank" rel="noopener noreferrer">here</a>)</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="ui child checkbox">
                                    <CheckBox label={(<b>{"3. Is it their debt and do they owe it to Bulb?"}</b>)} />
                                    <p>Has there been a COS/COT (ask for a tenancy agreement)</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="ui child checkbox">
                                    <CheckBox label={(<b>{"4. Have they lost a top up?"}</b>)} />
                                    <p>Get a receipt to check, ask EON PP to add it if needed</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="ui child checkbox">
                                    <CheckBox label={(<b>{"5. Does the screen have an Error?"}</b>)} />
                                    <p> Link to sheet with all of the errors and solutions <a href="https://docs.google.com/document/d/1skiV7ai4RpA6DIUwCs8yIOfR7_b-gMCKjoQo1u7qK4A/edit" target="_blank" rel="noopener noreferrer">here</a></p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="ui child checkbox">
                                    <CheckBox label={(<b>{"6. Do they have any vulnerabilities? Are they on the PSR?"}</b>)} />
                                    <p>Add them if not</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="ui child checkbox">
                                    <CheckBox label={(<b>{"7. If they have a key issue, would they prefer to get a tag code for a blank key or have one sent out?"}</b>)} />
                                </div>
                            </div>
                            <div className="item">
                                <div className="ui child checkbox">
                                    <CheckBox label={(<b>{"8. If their key isn’t working do they have an EON EDF or NPOWER key?"}</b>)} />
                                    <p>If not, phone shops around them to check for one (list <a href="https://docs.google.com/spreadsheets/d/1QNJnp72EjQodavXi3lq0-p30LEkzeSSOTaO9OlRDqQo/edit#gid=209627865" target="_blank" rel="noopener noreferrer">here</a>) and get a blank tag.</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="ui child checkbox">
                                    <CheckBox label={(<b>{"9. Do they have tropical fish? 🐠 (Or other important elec appliances)"}</b>)} />
                                </div>
                            </div>
                            <div className="item">
                                <div className="ui child checkbox">
                                    <CheckBox label={(<b>{"10. If Disc credit related, check if they’ve already got it"}</b>)} />
                                    <p>If not, send an email to <span style={{ color: "blue" }}>ppmipqueries@eonenergy.com</span> requesting a tag and a special action for the same amount of debt.</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="ui child checkbox">
                                    <CheckBox label={(<b>{"11. If they need to clear debt after a COS/COT, send an email to EON prepay asking for a reset tag"}</b>)} />
                                    <p>We can’t reset meters whose MSN begins with an F, S, A or have C or J in the middle. For these we need to do something called a Special Action.</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="ui child checkbox">
                                    <CheckBox label={(<b>{"12. If they’re missing a referral, check to see if they’ve made a top up first"}</b>)} />
                                    <p>They should have the D188 flow</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="ui child checkbox">
                                    <CheckBox label={(<b>{"14. LEAVE AN ACCOUNT NOTE"}</b>)} />
                                    <p>If you’re still confused, check <a href="go/prepayhandbook" target="_blank" rel="noopener noreferrer">go/prepayhandbook</a> for all your prepay needs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChecklistsPrepayElec;