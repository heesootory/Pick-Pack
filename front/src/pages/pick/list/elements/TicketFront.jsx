import { useState, useRef } from 'react'
import styled from "styled-components"
import { MdOutlineChangeCircle } from "react-icons/md";
import FlightList from "./FlightList";
import LineChart from './LineChart';
export default function TicketFront(){
    const [ticketType, setTicketType] = useState(true);
    const [contentType, setContentType] = useState(true);
    const [compareChecked, setCompareChecked] = useState(false);
    const [changingContent, setChangingContent] = useState(false);
    const ticketColor = 'skyblue';
    const flightContent = useRef();
    
    const data = {
        avg : 800000,
        info : [
            {date:'2023-03-01',price:710000},{date:'2023-03-02',price:720000},{date:'2023-03-03',price:730000},{date:'2023-03-04',price:740000},{date:'2023-03-05',price:750000},{date:'2023-03-06',price:760000},{date:'2023-03-07',price:770000},{date:'2023-03-08',price:780000},{date:'2023-03-09',price:790000},{date:'2023-03-10',price:800000},{date:'2023-03-11',price:710000},{date:'2023-03-12',price:720000},{date:'2023-03-13',price:730000},{date:'2023-03-14',price:740000},{date:'2023-03-15',price:750000},{date:'2023-03-16',price:760000},{date:'2023-03-17',price:770000},{date:'2023-03-18',price:780000},{date:'2023-03-19',price:790000},{date:'2023-03-20',price:800000},
        ]
    };
    const changeTicketType = () => {
        setTicketType((ticketType) => !ticketType)
    }
    const changeContentType = () => {
        if(changingContent) return;
        setChangingContent((changingContent) => !changingContent)
        flightContent.current.style.animation = 'changeContentType 1s linear';
        setTimeout(() => {
            setContentType((contentType) => !contentType)
        }, 500);
    }
    const deleteChangeAnimation = () => {
        setChangingContent((changingContent) => !changingContent)
        flightContent.current.style.animation = 'none'; 
    }

    const changeCompareChecked = () => {
        setCompareChecked((compareChecked) => !compareChecked);
    }
    return(
        <div style={{width: '640px', display: 'flex'}}>
            { ticketType ? 
            <>
            <TicketLeft>
                <TicketLeftTop color={ticketColor}>
                    <TicketLeftTopCheck type="checkbox" value={compareChecked} onChange={changeCompareChecked}/>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20" style={{marginRight: '8px'}}>
                            <path fill="#fff" d="M19.7857 10.001383c0 5.404-4.383 9.785-9.786 9.785-5.406 0-9.786-4.381-9.786-9.785 0-5.405 4.38-9.786 9.786-9.786 5.403 0 9.786 4.381 9.786 9.786"/>
                            <path fill="#d52528" d="M14.2033 4.102483c2.981.919 5.147 3.694 5.147 6.976 0 .479-.046.947-.133 1.399l-.011.063c-.228 1.287-.75 2.474-1.495 3.486l-.014.016c1.309-1.665 2.089-3.765 2.089-6.045 0-5.408-4.384-9.792-9.792-9.792-2.463 0-4.713.911-6.435 2.412l-.021.02c-1.356 1.243-2.205 3.032-2.205 5.015 0 .823.146 1.611.412 2.341l.014.033c.68 1.494 2.184 2.53 3.932 2.53 2.385 0 4.32-1.932 4.32-4.317l-.013-1.858c0-.855.477-1.599 1.178-1.979l.007-.006c.55-.302 1.18-.474 1.85-.474.407 0 .798.062 1.166.18z"/>
                            <path fill="#233979" d="M5.797 15.897583c-2.981-.919-5.147-3.694-5.147-6.976 0-.479.046-.947.133-1.399l.011-.063c.228-1.287.75-2.474 1.495-3.486l.014-.016c-1.309 1.665-2.089 3.765-2.089 6.045 0 5.408 4.384 9.792 9.792 9.792 2.463 0 4.713-.911 6.435-2.412l.021-.02c1.356-1.243 2.205-3.032 2.205-5.015 0-.823-.146-1.611-.412-2.341l-.014-.033c-.68-1.494-2.184-2.53-3.932-2.53-2.385 0-4.32 1.932-4.32 4.317l.013 1.858c0 .855-.477 1.599-1.178 1.979l-.007.006c-.55.302-1.18.474-1.85.474-.407 0-.798-.062-1.166-.18z"/>
                        </svg>
                        <span style={{fontsize: '20px', fontWeight: 'bold'}}>대한항공</span>
                    </div>
                    <TicketLeftTopCodeShare>공동</TicketLeftTopCodeShare>
                </TicketLeftTop>
                <FrontTicketLeftMiddle id="ticket-left-middle" ref={flightContent} onAnimationEnd={deleteChangeAnimation}>
                    {!contentType ? <FlightList /> : 
                    <>
                        <div id="ticket-dep" style={{textAlign: 'center', margin: 'auto 0px'}}>
                            <div style={{fontSize: '16px', fontWeight: 'bold'}}>출발</div>
                            <div style={{margin: '8px 0px'}}>
                                <div style={{fontSize: '24px', fontWeight: 'bold'}}>인천</div>
                                <div style={{fontSize: '16px'}}>(ICN)</div>
                            </div>
                            <div style={{fontSize: '16px'}}>09:00</div>
                        </div>
                        <div id="ticket-stop" style={{position: 'relative', textAlign: 'center', margin: 'auto 0px'}}>
                            <div style={{fontSize: '8px', padding: '4px 16px', borderBottom: '1px solid black'}}>프랑크푸르트(FRA)/이스탄불(ISB)</div>
                            <div style={{position: 'absolute', top: '17.5px', right: '1px', borderTop: '2px solid black', borderRight: '2px solid black', width: '8px', height: '8px' , transform: 'rotate(45deg)'}}></div>
                            <div style={{fontSize: '8px', padding: '4px 16px', borderTop: '1px solid black'}}>33시간 30분</div>
                        </div>
                        <div id="ticket-arr" style={{textAlign: 'center', margin: 'auto 0px'}}>
                            <div style={{fontSize: '16px', fontWeight: 'bold'}}>도착</div>
                            <div style={{margin: '8px 0px'}}>
                                <div style={{fontSize: '24px', fontWeight: 'bold'}}>씨엠립(앙코르와트)</div>
                                <div style={{fontSize: '16px'}}>(SER)</div>
                            </div>
                            <div style={{fontSize: '16px'}}>09:00 + 1</div>
                        </div>
                    </>
                    }
                    <MdOutlineChangeCircle className="change-button" onClick={changeContentType} size={24} style={{position: 'absolute', top: '8px', right: '8px'}}/>
                </FrontTicketLeftMiddle>
                <div id="ticket-left-bottom" style={{height: '32px', borderBottomLeftRadius: '16px', backgroundColor: 'skyblue'}}></div>
            </TicketLeft>
            <div style={{borderLeft: '2px dashed black'}}></div>
            <TicketRight>
                <TicketRightTop>
                    <svg className="bell" width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_197_7036" fill="white">
                            <ellipse cx="13.9163" cy="2.78552" rx="2.51497" ry="2.78259"/>
                        </mask>
                        <ellipse cx="13.9163" cy="2.78552" rx="2.51497" ry="2.78259" fill="white"/>
                        <path d="M13.4313 2.78552C13.4313 2.82058 13.4191 2.79677 13.469 2.74152C13.5234 2.68136 13.678 2.56812 13.9163 2.56812V8.56812C17.2404 8.56812 19.4313 5.68655 19.4313 2.78552H13.4313ZM13.9163 2.56812C14.1547 2.56812 14.3093 2.68136 14.3636 2.74152C14.4136 2.79677 14.4014 2.82058 14.4014 2.78552H8.40137C8.40137 5.68655 10.5923 8.56812 13.9163 8.56812V2.56812ZM14.4014 2.78552C14.4014 2.75046 14.4136 2.77427 14.3636 2.82952C14.3093 2.88969 14.1547 3.00293 13.9163 3.00293V-2.99707C10.5923 -2.99707 8.40137 -0.1155 8.40137 2.78552H14.4014ZM13.9163 3.00293C13.678 3.00293 13.5234 2.88969 13.469 2.82952C13.4191 2.77427 13.4313 2.75046 13.4313 2.78552H19.4313C19.4313 -0.1155 17.2404 -2.99707 13.9163 -2.99707V3.00293Z" fill="#010444" mask="url(#path-1-inside-1_197_7036)"/>
                        <path d="M18.2844 27.8292C18.2844 28.3687 17.9793 29.0012 17.1962 29.5582C16.4163 30.1129 15.2614 30.5031 13.9161 30.5031C12.5708 30.5031 11.4159 30.1129 10.636 29.5582C9.85291 29.0012 9.54785 28.3687 9.54785 27.8292C9.54785 27.2896 9.85291 26.6571 10.636 26.1001C11.4159 25.5454 12.5708 25.1553 13.9161 25.1553C15.2614 25.1553 16.4163 25.5454 17.1962 26.1001C17.9793 26.6571 18.2844 27.2896 18.2844 27.8292Z" fill="white" stroke="#010444" strokeWidth="3"/>
                        <mask id="path-4-inside-2_197_7036" fill="white">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.084 2.64746C7.85974 2.64746 2.61127 7.28598 1.8462 13.463L1.80483 13.797C1.64912 15.0542 1.68697 16.2862 1.89371 17.4652H1.50898L0 27.8303H28L26.6587 17.4652H26.2743C26.481 16.2862 26.5188 15.0542 26.3631 13.797L26.3218 13.463C25.5567 7.28597 20.3082 2.64746 14.084 2.64746Z"/>
                        </mask>
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.084 2.64746C7.85974 2.64746 2.61127 7.28598 1.8462 13.463L1.80483 13.797C1.64912 15.0542 1.68697 16.2862 1.89371 17.4652H1.50898L0 27.8303H28L26.6587 17.4652H26.2743C26.481 16.2862 26.5188 15.0542 26.3631 13.797L26.3218 13.463C25.5567 7.28597 20.3082 2.64746 14.084 2.64746Z" fill="white"/>
                        <path d="M1.8462 13.463L-1.13105 13.0943L-1.13105 13.0943L1.8462 13.463ZM1.80483 13.797L4.78209 14.1657L4.78209 14.1657L1.80483 13.797ZM1.89371 17.4652V20.4652H5.46556L4.84862 16.947L1.89371 17.4652ZM1.50898 17.4652V14.4652H-1.0859L-1.45972 17.033L1.50898 17.4652ZM0 27.8303L-2.96871 27.3981L-3.46837 30.8303H0V27.8303ZM28 27.8303V30.8303H31.4132L30.9752 27.4453L28 27.8303ZM26.6587 17.4652L29.6339 17.0802L29.2955 14.4652H26.6587V17.4652ZM26.2743 17.4652L23.3193 16.947L22.7024 20.4652H26.2743V17.4652ZM26.3631 13.797L23.3859 14.1657L23.3859 14.1657L26.3631 13.797ZM26.3218 13.463L29.299 13.0943L29.299 13.0943L26.3218 13.463ZM4.82345 13.8318C5.40239 9.1575 9.37399 5.64746 14.084 5.64746V-0.352539C6.34548 -0.352539 -0.179854 5.41445 -1.13105 13.0943L4.82345 13.8318ZM4.78209 14.1657L4.82345 13.8318L-1.13105 13.0943L-1.17242 13.4282L4.78209 14.1657ZM4.84862 16.947C4.69277 16.0582 4.66326 15.1251 4.78209 14.1657L-1.17242 13.4282C-1.36501 14.9832 -1.31883 16.5142 -1.0612 17.9833L4.84862 16.947ZM1.50898 20.4652H1.89371V14.4652H1.50898V20.4652ZM2.96871 28.2625L4.47769 17.8974L-1.45972 17.033L-2.96871 27.3981L2.96871 28.2625ZM28 24.8303H0V30.8303H28V24.8303ZM23.6835 17.8502L25.0248 28.2153L30.9752 27.4453L29.6339 17.0802L23.6835 17.8502ZM26.2743 20.4652H26.6587V14.4652H26.2743V20.4652ZM23.3859 14.1657C23.5047 15.1251 23.4752 16.0582 23.3193 16.947L29.2292 17.9833C29.4868 16.5142 29.533 14.9832 29.3404 13.4282L23.3859 14.1657ZM23.3445 13.8318L23.3859 14.1657L29.3404 13.4282L29.299 13.0943L23.3445 13.8318ZM14.084 5.64746C18.794 5.64746 22.7656 9.1575 23.3445 13.8318L29.299 13.0943C28.3478 5.41444 21.8225 -0.352539 14.084 -0.352539V5.64746Z" fill="#010444" mask="url(#path-4-inside-2_197_7036)"/>
                    </svg>
                </TicketRightTop>
                <div id="ticket-right-middle" style={{height: '160px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRight: '1px solid black'}}>
                    <div style={{fontSize: '20px', margin: 'auto 0px', fontWeight: '600'}}>1,320,000원</div>
                </div>
                <TicketRightBottom color='skyblue'>
                    <div className="flip-background"></div>
                    <FlipPaper className="flip" onClick={changeTicketType}/>
                </TicketRightBottom>
            </TicketRight>
            </> : 
            <>
                <TicketLeft>
                    <TicketLeftTop color={ticketColor}>
                        <TicketLeftTopCheck type="checkbox" value={compareChecked} onChange={changeCompareChecked}/>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20" style={{marginRight: '8px'}}>
                                <path fill="#fff" d="M19.7857 10.001383c0 5.404-4.383 9.785-9.786 9.785-5.406 0-9.786-4.381-9.786-9.785 0-5.405 4.38-9.786 9.786-9.786 5.403 0 9.786 4.381 9.786 9.786"/>
                                <path fill="#d52528" d="M14.2033 4.102483c2.981.919 5.147 3.694 5.147 6.976 0 .479-.046.947-.133 1.399l-.011.063c-.228 1.287-.75 2.474-1.495 3.486l-.014.016c1.309-1.665 2.089-3.765 2.089-6.045 0-5.408-4.384-9.792-9.792-9.792-2.463 0-4.713.911-6.435 2.412l-.021.02c-1.356 1.243-2.205 3.032-2.205 5.015 0 .823.146 1.611.412 2.341l.014.033c.68 1.494 2.184 2.53 3.932 2.53 2.385 0 4.32-1.932 4.32-4.317l-.013-1.858c0-.855.477-1.599 1.178-1.979l.007-.006c.55-.302 1.18-.474 1.85-.474.407 0 .798.062 1.166.18z"/>
                                <path fill="#233979" d="M5.797 15.897583c-2.981-.919-5.147-3.694-5.147-6.976 0-.479.046-.947.133-1.399l.011-.063c.228-1.287.75-2.474 1.495-3.486l.014-.016c-1.309 1.665-2.089 3.765-2.089 6.045 0 5.408 4.384 9.792 9.792 9.792 2.463 0 4.713-.911 6.435-2.412l.021-.02c1.356-1.243 2.205-3.032 2.205-5.015 0-.823-.146-1.611-.412-2.341l-.014-.033c-.68-1.494-2.184-2.53-3.932-2.53-2.385 0-4.32 1.932-4.32 4.317l.013 1.858c0 .855-.477 1.599-1.178 1.979l-.007.006c-.55.302-1.18.474-1.85.474-.407 0-.798-.062-1.166-.18z"/>
                            </svg>
                            <span style={{fontsize: '20px', fontWeight: 'bold'}}>대한항공</span>
                        </div>
                        <TicketLeftTopCodeShare>공동</TicketLeftTopCodeShare>
                    </TicketLeftTop>
                    <BackTicketLeftMiddle id="ticket-left-middle" ref={flightContent} onAnimationEnd={deleteChangeAnimation}>
                        <LineChart data={data}/>
                    </BackTicketLeftMiddle>
                </TicketLeft>
                <div style={{borderLeft: '2px dashed black'}}></div>
                <TicketRight>
                    <TicketRightTop>
                        <svg className="bell" width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-inside-1_197_7036" fill="white">
                                <ellipse cx="13.9163" cy="2.78552" rx="2.51497" ry="2.78259"/>
                            </mask>
                            <ellipse cx="13.9163" cy="2.78552" rx="2.51497" ry="2.78259" fill="white"/>
                            <path d="M13.4313 2.78552C13.4313 2.82058 13.4191 2.79677 13.469 2.74152C13.5234 2.68136 13.678 2.56812 13.9163 2.56812V8.56812C17.2404 8.56812 19.4313 5.68655 19.4313 2.78552H13.4313ZM13.9163 2.56812C14.1547 2.56812 14.3093 2.68136 14.3636 2.74152C14.4136 2.79677 14.4014 2.82058 14.4014 2.78552H8.40137C8.40137 5.68655 10.5923 8.56812 13.9163 8.56812V2.56812ZM14.4014 2.78552C14.4014 2.75046 14.4136 2.77427 14.3636 2.82952C14.3093 2.88969 14.1547 3.00293 13.9163 3.00293V-2.99707C10.5923 -2.99707 8.40137 -0.1155 8.40137 2.78552H14.4014ZM13.9163 3.00293C13.678 3.00293 13.5234 2.88969 13.469 2.82952C13.4191 2.77427 13.4313 2.75046 13.4313 2.78552H19.4313C19.4313 -0.1155 17.2404 -2.99707 13.9163 -2.99707V3.00293Z" fill="#010444" mask="url(#path-1-inside-1_197_7036)"/>
                            <path d="M18.2844 27.8292C18.2844 28.3687 17.9793 29.0012 17.1962 29.5582C16.4163 30.1129 15.2614 30.5031 13.9161 30.5031C12.5708 30.5031 11.4159 30.1129 10.636 29.5582C9.85291 29.0012 9.54785 28.3687 9.54785 27.8292C9.54785 27.2896 9.85291 26.6571 10.636 26.1001C11.4159 25.5454 12.5708 25.1553 13.9161 25.1553C15.2614 25.1553 16.4163 25.5454 17.1962 26.1001C17.9793 26.6571 18.2844 27.2896 18.2844 27.8292Z" fill="white" stroke="#010444" strokeWidth="3"/>
                            <mask id="path-4-inside-2_197_7036" fill="white">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.084 2.64746C7.85974 2.64746 2.61127 7.28598 1.8462 13.463L1.80483 13.797C1.64912 15.0542 1.68697 16.2862 1.89371 17.4652H1.50898L0 27.8303H28L26.6587 17.4652H26.2743C26.481 16.2862 26.5188 15.0542 26.3631 13.797L26.3218 13.463C25.5567 7.28597 20.3082 2.64746 14.084 2.64746Z"/>
                            </mask>
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.084 2.64746C7.85974 2.64746 2.61127 7.28598 1.8462 13.463L1.80483 13.797C1.64912 15.0542 1.68697 16.2862 1.89371 17.4652H1.50898L0 27.8303H28L26.6587 17.4652H26.2743C26.481 16.2862 26.5188 15.0542 26.3631 13.797L26.3218 13.463C25.5567 7.28597 20.3082 2.64746 14.084 2.64746Z" fill="white"/>
                            <path d="M1.8462 13.463L-1.13105 13.0943L-1.13105 13.0943L1.8462 13.463ZM1.80483 13.797L4.78209 14.1657L4.78209 14.1657L1.80483 13.797ZM1.89371 17.4652V20.4652H5.46556L4.84862 16.947L1.89371 17.4652ZM1.50898 17.4652V14.4652H-1.0859L-1.45972 17.033L1.50898 17.4652ZM0 27.8303L-2.96871 27.3981L-3.46837 30.8303H0V27.8303ZM28 27.8303V30.8303H31.4132L30.9752 27.4453L28 27.8303ZM26.6587 17.4652L29.6339 17.0802L29.2955 14.4652H26.6587V17.4652ZM26.2743 17.4652L23.3193 16.947L22.7024 20.4652H26.2743V17.4652ZM26.3631 13.797L23.3859 14.1657L23.3859 14.1657L26.3631 13.797ZM26.3218 13.463L29.299 13.0943L29.299 13.0943L26.3218 13.463ZM4.82345 13.8318C5.40239 9.1575 9.37399 5.64746 14.084 5.64746V-0.352539C6.34548 -0.352539 -0.179854 5.41445 -1.13105 13.0943L4.82345 13.8318ZM4.78209 14.1657L4.82345 13.8318L-1.13105 13.0943L-1.17242 13.4282L4.78209 14.1657ZM4.84862 16.947C4.69277 16.0582 4.66326 15.1251 4.78209 14.1657L-1.17242 13.4282C-1.36501 14.9832 -1.31883 16.5142 -1.0612 17.9833L4.84862 16.947ZM1.50898 20.4652H1.89371V14.4652H1.50898V20.4652ZM2.96871 28.2625L4.47769 17.8974L-1.45972 17.033L-2.96871 27.3981L2.96871 28.2625ZM28 24.8303H0V30.8303H28V24.8303ZM23.6835 17.8502L25.0248 28.2153L30.9752 27.4453L29.6339 17.0802L23.6835 17.8502ZM26.2743 20.4652H26.6587V14.4652H26.2743V20.4652ZM23.3859 14.1657C23.5047 15.1251 23.4752 16.0582 23.3193 16.947L29.2292 17.9833C29.4868 16.5142 29.533 14.9832 29.3404 13.4282L23.3859 14.1657ZM23.3445 13.8318L23.3859 14.1657L29.3404 13.4282L29.299 13.0943L23.3445 13.8318ZM14.084 5.64746C18.794 5.64746 22.7656 9.1575 23.3445 13.8318L29.299 13.0943C28.3478 5.41444 21.8225 -0.352539 14.084 -0.352539V5.64746Z" fill="#010444" mask="url(#path-4-inside-2_197_7036)"/>
                        </svg>
                    </TicketRightTop>
                    <div id="ticket-right-middle" style={{height: '160px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRight: '1px solid black'}}>
                        <div style={{fontSize: '20px', margin: 'auto 0px', fontWeight: '600'}}>1,320,000원</div>
                    </div>
                    <TicketRightBottom color='white'>
                        <div className="flip-background"></div>
                        <FlipPaper className="flip" onClick={changeTicketType}/>
                    </TicketRightBottom>
                </TicketRight>
            </>}
            
        </div>
    )
}
const TicketLeft = styled.div`
    width: 480px;
`;
const TicketLeftTop = styled.div`
    height: 48px;
    display: flex;
    align-items: center;
    border-top-left-radius: 16px;
    background-color: ${props => props.color || 'white'};
`
const TicketLeftTopCheck = styled.input`
    width: 16px;
    height: 16px;
    margin: 0px 16px;
`
const TicketLeftTopCodeShare = styled.span`
    border: 1px solid black;
    font-size: 8px;
    border-radius: 16px;
    padding: 0px 4px;
    background-color: #D9D9D9;
    margin-left: 8px;
`;
const BackTicketLeftMiddle = styled.div`
    height: 192px;
    border-left: 1px solid black;
    border-bottom: 1px solid black;
    border-bottom-left-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const FrontTicketLeftMiddle = styled.div`
    height: 160px;
    display: flex;
    justify-content: space-around;
    position: relative;
    @keyframes changeContentType{
        0%{
            transform: rotateX(0deg);
        }
        50%{
            transform: rotateX(90deg);
        }
        100%{
            transform: rotateX(0deg);
        }
    }
    .change-button:hover{
        cursor: pointer;
        opacity: .7;
    }
`;

const TicketRight = styled.div`
    width: 160px;
`
const TicketRightTop = styled.div`
    height: 48px;
    border-top-right-radius: 16px;
    background-color: skyblue;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .bell{
        margin-right: 16px;
    }
    .bell:hover {
        color: red;
        cursor: pointer;
        opacity: 0.2;
    }
`;
const TicketRightBottom = styled.div`
    height: 32px;
    position: relative;
    background-color: ${(props) => props.color};
    .flip-background{
        position: absolute;
        right: 0px;
        bottom: 0px;
        width: 0px;
        height: 0px;
        border-bottom: 20px solid white;
        border-top: 20px solid transparent;
        border-left: 20px solid transparent;
        border-right: 20px solid white;
    }
    &:hover .flip{
        animation: readyToFlip 1s infinite linear;
    }
    @keyframes readyToFlip{
        0%{
            transform: rotateX(0deg) rotateY(0deg) skewX(0deg);
            cursor: pointer;
        }
        50%{
            transform: rotateX(-45deg) rotateY(23deg) skewX(-6deg);
            cursor: pointer;
        }
        100%{
            transform: rotateX(0deg) rotateY(0deg) skewX(0deg);
            cursor: pointer;
        }
    }
`;
const FlipPaper = styled.div`
    position: absolute;
    right: 0px;
    bottom: 0px;
    border-top-left-radius: 16px;
    width: 40px;
    height: 40px;
    // background: linear-gradient(137.07deg, rgba(255, 255, 255, 0.5) -41.23%, rgba(125, 125, 125, 0) 56.15%);
    background: white;
    box-shadow: -3px -3px 3px rgba(0, 0, 0, 0.5);
`;