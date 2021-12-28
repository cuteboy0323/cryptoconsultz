import React from "react";

import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import useStyles from "../assets/styles";

const Terms = () => {
    const classes = useStyles();

    return (
        <Box className={classes.terms}>
            <Container>
                <Box className={classes.pageHeader}>
                    <Typography variant="h3" className="title">
                        Terms & Conditions
                    </Typography>
                    <Breadcrumbs separator="-">
                        <Link
                            underline="none"
                            href="/"
                        >
                            Home
                        </Link>,
                        <Typography>
                            Terms Of Service Agreement
                        </Typography>
                    </Breadcrumbs>
                </Box>
                <Box className="terms">
                    <Card className="card">
                        <CardContent>
                            <Typography className="title" variant="h4">
                                Terms of Service
                            </Typography>
                            <Divider className="dOne" />
                            <Divider className="dTwo" />
                            <Typography color="textSecondary">
                                {`The following terms of service ("TOS") will apply to the agreement to provide service between CryptoConsultz, LLC ("Company"), and the individual or business entity identified on the order form for said services ("Customer").  These terms, along with the attached “Legal Considerations, Risks and Disclaimer,” shall hereinafter be referred to as the "Agreement" between the two above mentioned parties.`}
                            </Typography>
                            <Box component="br" />
                            <Box component="br" />
                            <Typography color="secondary">
                                Serivce Rates
                            </Typography>
                            <Typography color="textSecondary">
                                {`Customer acknowledges that they have been made adequately aware of the initial rates and fees associated with services being rendered by the Company and have received a complete description of services to be rendered. Customer also acknowledges that the Company reserves the right to change the specified rates and charges from time to time. Any promotional offers made by the Company are contingent upon the Company maintaining its cost of service goals, including but not limited to rates charged by its suppliers. Where possible, the Company will provide the Customer with a minimum of 15 days’ notice of any rate changes.`}
                            </Typography>
                            <Box component="br" />
                            <Box component="br" />
                            <Typography color="secondary">
                                Payments and Fees
                            </Typography>
                            <Typography color="textSecondary">
                                {`Customer acknowledges that the Company is under no obligation to provide services under the terms of this Agreement until all stated charges have been paid-in-full, and the Company has been able to adequately verify the validity of said payment. `}
                            </Typography>
                            <Box component="br" />
                            <Box component="br" />
                            <Typography color="secondary">
                                Recurring Payments
                            </Typography>
                            <Typography color="textSecondary">
                                {`Recurring payments will become due and payable on the first day of the month following the completion of the first invoice term, and will continue as such for all subsequent invoices. Any account that becomes past-due may will be subject to a 10% late payment fee, and may be suspended or disabled for non-payment at any time at the sole discretion of the Company. Accounts suspended or disabled for non-payment may be subject to a restoration charge due and payable prior to service being restored. Any accounts that are not collectible by the Company will be turned over to an outside collection agency. If your account is turned over for collection, you agree to pay the Company a "Collection Fee" of not less than $150, in addition to any fees that may be imposed by the outside collection agency or its legal representation. All services that the Company offers are considered to be provided on a strictly prepaid basis.`}
                            </Typography>
                            <Box component="br" />
                            <Box component="br" />
                            <Typography color="secondary">
                                Refund Policy
                            </Typography>
                            <Typography color="textSecondary">
                                {`All services rendered by the Company are provided on a non-refundable basis. This includes, but it not limited to, session fees, package fees, seminar fees, webinar fees, monthly fees, upgrade fees, professional services fees, and bandwidth overage fees, regardless of usage. In addition, if your account is canceled by the company for violation of this Agreement or the attached Acceptable Use Policy, all payments made to the Company become completely non-refundable.  Customer agrees not to charge back any credit card payments for services rendered. In the event that a customer files a charge back or other payment dispute, they will be considered to be in violation of this agreement and may be subject to collection action as described in the “Payments and Fees” section above.`}
                            </Typography>
                            <Box component="br" />
                            <Box component="br" />
                            <Typography color="secondary">
                                Service Cancellation
                            </Typography>
                            <Box component="br" />
                            <Typography color="primary">
                                Scheduled Services:
                            </Typography>
                            <Typography color="textSecondary">
                                {`If the Customer is unable to attend a scheduled appointment, the Customer may cancel the appointment. Cancellations must occur no less than twenty-four (24) hours prior to the appointment time.  `}
                            </Typography>
                            <Box component="br" />
                            <Typography color="primary">
                                {`Cancellations with > 24 hour notice:`}
                            </Typography>
                            <Typography color="textSecondary">
                                {`The Customer will be charged a minimum $25 cancellation fee for appointments cancelled greater than 24 hours prior to the scheduled appointment time.  The Company’s $25 cancellation fee is applied to each hour of services that are cancelled.  The Customer can cancel the appointment by accessing the link and following the directions as outlined in the session confirmation email that is sent by the Company’s third party scheduling provider.`}
                            </Typography>
                            <Box component="br" />
                            <Typography color="textSecondary">
                                {`In order for the customer to be considered for a partial refund for cancellations made more than twenty-four (24) hours prior to the scheduled appointment time, the Customer must complete the refund request form found on the CryptoConsultz website at http://www.cryptoconsultz.com/customer-service.html`}
                            </Typography>
                            <Box component="br" />
                            <Typography color="textSecondary">
                                {`Refunds issued are at the discretion of the Company and are not guaranteed.  If a refund is approved and issued, the Customer will be refunded the original purchase price less the above named $25 cancellation fee charged for each hour of services cancelled.  The Company is under no obligation to provide this refund but will consider the circumstances for which the appointment was cancelled when evaluating refund requests for cancellations made greater than twenty-four (24) hours prior to the scheduled appointment time.  Refunds requests will be evaluated and processed within 30 days of request date.  The Customer will receive an email from the company outlining the determination of the refund request.  The Company is not liable for delays in refunds made by the payment processing company.`}
                            </Typography>
                            <Box component="br" />
                            <Typography color="textSecondary">
                                {`Any rescheduled sessions must be scheduled and completed within the schedule availability posted on the date of the cancellation.  CryptoConsultz LLC does not guarantee rescheduling availability as the appointment times available are dependent on the demand for services and consultant availability.  In the event that a client is not able to find an open appointment time at the time of appointment cancellation, the client forfeits the session and will not be offered a refund or additional opportunities to reschedule.`}
                            </Typography>
                            <Box component="br" />
                            <Typography color="primary">
                                {`Cancellations with > 24 hour notice:`}
                            </Typography>
                            <Typography color="textSecondary">
                                {`In the event that the Customer cancels a session less than twenty-four (24) hours prior to the scheduled appointment time, the Customer will not receive a refund nor will the Customer be guaranteed an opportunity to reschedule the appointment time.  The Company is under no obligation to offer rescheduling opportunities, however, if the Company elects to offer the Customer a rescheduling opportunity the Customer may be charged a drop-in fee of $39.`}
                            </Typography>
                            <Box component="br" />
                            <Typography color="textSecondary">
                                {`Under no circumstances is the Company or its staff obligated to cancel or reschedule appointments for the Customer.  The Customer may request such assistance which will be provided as a courtesy to the Customer when available.`}
                            </Typography>
                            <Box component="br" />
                            <Typography color="primary">
                                {`Non-Scheduled Services:`}
                            </Typography>
                            <Typography color="textSecondary">
                                {`Requests to cancel non-scheduled services may be made by the Customer by notifying the Company’s Billing Department.  Such requests can be made by emailing the request to billing@cryptoconsultz.com.  All requests for service cancellation must be made a minimum of 10 days prior to the renewal date of the service being cancelled. Failure to provide notice at least 10 days prior to the renewal date will result in a full billable monthly cycle prior to cancellation. Where all services are considered to be provided on a strictly prepaid basis, no prorated or partial refunds will be made. All outstanding invoices must be paid in full prior to requesting cancellation.`}
                            </Typography>
                            <Box component="br" />
                            <Box component="br" />
                            <Typography color="secondary">
                                {`No-Show Policy`}
                            </Typography>
                            <Typography color="textSecondary">
                                {`In the event the Customer does not attend an appointment and does not cancel the appointment prior to the scheduled appointment time, the Company considers it  a “no-show” appointment. No-shows impact the consultants who anticipate the session as well as other clients who could have been seen in the spot that was missed. The Company is under no obligation to issue refunds to Customers for no show appointments nor is the Company obligated to offer the Customer an opportunity to reschedule no show appointments.  In the event the Company does offer the Customer an opportunity to reschedule a no show appointment the Customer will be charged a drop-in fee of $39.`}
                            </Typography>
                            <Box component="br" />
                            <Typography color="textSecondary">
                                {`The Company has the right to suspend or restrict the Customers scheduling privileges and refuse any future services in the event of a no show appointment.`}
                            </Typography>
                            <Box component="br" />
                            <Box component="br" />
                            <Typography color="secondary">
                                {`Expiration Policy`}
                            </Typography>
                            <Typography color="textSecondary">
                                {`All sessions purchases, goods, services, or other sales are subject to our 6-month expiration.  Refunds for purchases made will not be issued.  The Company is under no obligation to provide services for purchases made greater than 180 days from purchase date.  It is the responsibility of the Customer to ensure that the services purchased are available within the expiration date prior to making a purchase.`}
                            </Typography>
                            <Box component="br" />
                            <Box component="br" />
                            <Typography color="secondary">
                                {`Virtual Consulting Session Process`}
                            </Typography>
                            <Box component="br" />
                            <Typography color="primary">
                                {`Scheduling & Payment`}
                            </Typography>
                            <Typography color="textSecondary">
                                {`CryptoConsultz LLC uses Zoom for the Company’s virtual consulting sessions provided to the Customer.  In order to participate in virtual consulting sessions, the Customer must complete the CryptoConsultz Intake Form which includes a link to the Terms of Service, outlined here, as well as the Legal Considerations and Risk Disclaimer as outlined below.  The Customer must agree to these Terms of Services as well as the Legal Considerations and Risk disclaimer in order to proceed to the third party scheduling website www.Calendly.com.  In order to complete the scheduling process with Calendly, the Customer must make the payment for services in full.  After the Customer has completed the CryptoConsultz Intake Form, scheduled the session through Calendly and made the payment for services in full, the Customer will receive an email outlining the “Meeting Details.”`}
                            </Typography>
                            <Box component="br" />
                            <Typography color="primary">
                                {`Connecting to Virtual Consulting Sessions`}
                            </Typography>
                            <Typography color="textSecondary">
                                {`Prior to the scheduled session time, the Customer can connect to the meeting through the meeting link provided in the in the “Invitation” email.  Failure of the Customer to locate the “Invitation” email and/or access the meeting link prior to the Customer’s scheduled session does not obligate the Company to provide the customer with a refund.  The Customer is provided a courtesy “Meeting Preparation” email from the Company with instructions on how to connect.  It is the responsibility of the Customer to prepare for the meeting and address any connectivity issues prior to the meeting and before the twenty-four (24) hour cancellation deadline.`}
                            </Typography>
                            <Box component="br" />
                            <Typography color="textSecondary">
                                {`The Company offers virtual consulting sessions through Zoom as a courtesy to the Customer but is in no way obligated to provide session through virtual consulting platforms.  In the event that the Customer or a representative of the Company is unable to connect to virtually, a phone consultation will be provided.`}
                            </Typography>
                            <Box component="br" />
                            <Typography color="textSecondary">
                                {`The Company does not accommodate for technical difficulties on the Customer’s end.  It is the responsibility of the Customer to test all devices and connectivity platforms prior to the scheduled meeting time.  The Company is not obligated to provide customer support in addressing connectivity problems.`}
                            </Typography>
                            <Box component="br" />
                            <Typography color="primary">
                                {`Delayed Consultation Sessions`}
                            </Typography>
                            <Typography color="textSecondary">
                                {`The Company allows a ten (10) minute grace period to account for delays in meeting times for Customers, regardless of the reason for delay.  The Company is not obligated to provide a refund to the Customer for meetings delayed less than ten (10) minutes from the scheduled meeting time.`}
                            </Typography>
                            <Box component="br" />
                            <Typography color="textSecondary">
                                {`In the event the Customer is late, the Customer is required to call the CryptoConsultz support line at 360-601-8800 to report the delay.  The Company does not guarantee that support staff will be available on demand before, during or after the Customer’s session time.  See Customer Service response times for details.  The Company’s consultant will wait on the meeting for ten (10) minutes in order to allow the customer to join the call or virtual session.  Should the Customer fail to connect to the meeting within ten (10) minutes time the session will be terminated and considered a no show.  Refunds will not be given for no show appointments.  See above "no show" terms for details.  If the Customer connects to the meeting within ten (10) minutes of the scheduled session start time, the meeting will continue as scheduled.  No additional time will be added to the consultation session time to accommodate for session delays due to Customer delay.  The Company is under no obligation to make further attempts to contact the Customer during times of meeting delay but may do so as a courtesy to the customer in the event a meeting is delayed.`}
                            </Typography>
                            <Box component="br" />
                            <Typography color="textSecondary">
                                {`In the event the Company’s representative has a delay in joining a session, the Customer agrees to wait on the line for ten (10) minutes to account for the Company’s grace period as outlined above before terminating the session.  Should the Company’s representative fail to join the meeting within ten minutes, the Customer will be offered a full refund in the amount of the original purchase price for the session.  Alternatively, the Customer may elect an opportunity to reschedule the session along with a complementary additional thirty (30) minutes of consultation time which can be scheduled within six (6) months of the original purchase date. `}
                            </Typography>
                            <Box component="br" />
                            <Typography color="textSecondary">
                                {`In the event the Company’s representative is less than ten (10) minutes late to the meeting, the Customer will be given the opportunity to extend the meeting time by fifteen (15) minutes or will be given a complementary 15 minute consultation session which may be scheduled within six (6) months of the original purchase date.`}
                            </Typography>
                            <Box component="br" />
                            <Typography color="textSecondary">
                                {`In the event of any delays, the Customer can request a refund or complementary session, as outlined above, by submitting a Customer Service Request on the Website.`}
                            </Typography>
                            <Box component="br" />
                            <Box component="br" />
                            <Typography color="secondary">
                                {`Billing Errors`}
                            </Typography>
                            <Typography color="textSecondary">
                                {`Customer acknowledges that the Company will make it's best effort to ensure that all invoices are correctly issued. However, should Customer note any possible errors, Customer agrees to notify our Billing department within 15 days of the issuance of the errant invoice. After 15 days, all invoices will be assumed to be correct, and no further billing adjustments will be made.`}
                            </Typography>
                            <Box component="br" />
                            <Box component="br" />
                            <Typography color="secondary">
                                {`Billing Department Inquiries:  billing@cryptoconsultz.com`}
                            </Typography>
                            <Box component="br" />
                            <Box component="br" />
                            <Typography color="secondary">
                                {`No Lease Implied`}
                            </Typography>
                            <Typography color="textSecondary">
                                {`Customer acknowledges that the Company is providing a service, and no binding lease of physical equipment or real estate is in any way implied as part of this agreement.`}
                            </Typography>
                            <Box component="br" />
                            <Box component="br" />
                            <Typography color="secondary">
                                {`Privacy Policy`}
                            </Typography>
                            <Typography color="textSecondary">
                                {`Company will not sell, lease, borrow, give, or otherwise dispose of any type of customer provided information to any third party unless compelled to do so by law or in cooperation with any law enforcement investigation. Company reserves the right to collect and utilize any customer information, including, but not limited to email addresses and web site cookies, for internal tracking and/or marketing purposes.`}
                            </Typography>
                            <Box component="br" />
                            <Box component="br" />
                            <Typography color="secondary">
                                {`Violation of Terms`}
                            </Typography>
                            <Typography color="textSecondary">
                                {`Should Customer violate any of these terms, the Company will attempt to contact the customer by email or telephone before taking any action where avoidable. However, the Company will pursue whatever action is necessary to serve its best interest in these cases, even if that should necessitate the suspension or termination of Customer's services without any type of notification.`}
                            </Typography>
                            <Box component="br" />
                            <Box component="br" />
                            <Typography color="secondary">
                                {`Complaint Response Times`}
                            </Typography>
                            <Typography color="textSecondary">
                                {`The Company does not guarantee that support staff will be available on demand before, during or after the Customer’s session time.  Customer Service inquiries can be made by filling out the Customer Service Request Form.  Requests will be prioritizes at the discretion of the Company.  CryptoConsultz LLC makes no guarantee to complaint response times but does make every effort to address Customer requests in a timely manner, typically within 3-5 business days.`}
                            </Typography>
                            <Box component="br" />
                            <Box component="br" />
                            <Typography color="secondary">
                                {`CRYPTOCONSULTZ, LLC.`}
                            </Typography>
                            <Typography color="secondary">
                                {`LEGAL CONSIDERATIONS, RISKS AND DISCLAIMER`}
                            </Typography>
                            <Box component="br" />
                            <Box component="br" />
                            <Typography color="primary">
                                {`IMPORTANT NOTICE: PLEASE READ THE ENTIRETY OF THIS “Legal Considerations, Risks and Disclaimer” SECTION CAREFULLY.  WE RECOMMEND YOU CONSULT A LEGAL, FINANCIAL, TAX OR OTHER PROFESSIONAL ADVISOR(S) OR EXPERTS FOR FURTHER GUIDANCE PRIOR TO PARTICIPATING IN THE EDUCATIONAL & COACHING SESSIONS/COMMUNICATIONS PROVIDED BY CRYPTOCONSULTZ.`}
                            </Typography>
                            <Box component="br" />
                            <Typography color="textSecondary">
                                {`You must read the following “Legal Considerations, Risks and Disclaimer” section before: (i) making use of services provided by CryptConsultz LLC (the “Company”)  and any and all information available on the website(s) of CRYPTOCONSULTZ LLC located at www.cryptoconsultz.com (the “Website”).  This “Legal Considerations, Risks and Disclaimer” section applies to services provided and any and all information available on the Website or through communications with CryptoConsultz LLC.  The contents of this “Legal Considerations, Risks and Disclaimer” section outlines the terms and conditions applicable to you in connection with (i) your use of CryptoConsultz LLC services and of any and all information available on the Website; and/or (ii) your participation in any educational/coaching sessions or seminars offered.  In each case in addition to any other terms and conditions that we may publish from time to time relating to virtual currency, blockchain technology and financial transactions (such terms hereinafter referred to as the “Terms”).   This “Legal Considerations, Risks and Disclaimer” section may be updated from time to time and will be published as part of the latest version of the Website which shall be available on the Website.  You shall be obliged to check the latest available version of the Website prior to participating in any CryptoConsultz LLC services, including but not limited to educational/coaching sessions, seminars, telephone/email/other communications.`}
                            </Typography>
                            <Box component="br" />
                            <Typography color="textSecondary">
                                {`The information set forth in this “Legal Considerations, Risks and Disclaimer” section may not be exhaustive and does not imply any elements of a contractual relationship. While we make every reasonable effort to ensure that all information provided to clients and available on the Website (all the information provided/available to customers through communications or on the Website hereinafter referred to as the “Available Information”) is accurate and up to date, such material in no way constitutes professional advice. The Company neither guarantees nor accepts responsibility for the accuracy, reliability, current state or completeness of the Available Information.  Individuals intending to participate in financial transactions or investments should seek professional advice prior to acting on any of the Available Information.`}
                            </Typography>
                            <Box component="br" />
                            <Box component="br" />
                            <Typography color="secondary">
                                {`LEGAL CONSIDERTIONS`}
                            </Typography>
                            <Typography color="textSecondary">
                                {`Given the uncertain and largely unregulated status of distributed ledger technologies, businesses and activities as well as cryptocurrencies and cryptocurrency-related businesses and activities, the Company has spent a significant amount of time and resources to vet valid information to provide to customers.`}
                            </Typography>
                            <Box component="br" />
                            <Typography color="textSecondary">
                                {`The Company does not recommend purchasing Tokens, Coins or other forms of currency or property for speculative investment purposes.  Cryptocurrency, virtual/digital currency, and Tokens are sold as digital assets, similar to downloadable software, digital music and the like. The Company does not recommend that you make such purchases unless you have prior experience with cryptographic tokens, blockchain-based software and distributed ledger technology and unless you have taken independent professional advice.`}
                            </Typography>
                            <Box component="br" />
                            <Typography color="textSecondary">
                                {`The Company does not provide any opinion or any advice to purchase, sell, or otherwise transact with virtual/digital currency and the presentation, publication or communication of all or any part of the Available Information shall not form the basis of, or be relied upon in connection with, any contract or investment decision.`}
                            </Typography>
                            <Box component="br" />
                            <Box component="br" />
                            <Typography color="secondary">
                                {`NO ADVICE`}
                            </Typography>
                            <Typography color="textSecondary">
                                {`No part of the Available Information should be considered to be business, legal, financial or tax advice regarding the Company, the coins/tokens/digital currency/virtual currency or any of the matters to which all or any part of the Available Information relates.   You should consult your own legal, financial, tax or other professional advisor regarding the Available Information.`}
                            </Typography>
                            <Box component="br" />
                            <Box component="br" />
                            <Typography color="secondary">
                                {`LIMITATION OF LIABILITY`}
                            </Typography>
                            <Typography color="textSecondary">
                                {`In no event shall the Company or any current or former employees, officers, directors, partners, trustees, representative, agents, advisors, contractors, or volunteers of the Company (hereinafter the “Company Representatives”) be liable for: (i) any loss of profits, lost savings or incidental, indirect, special or consequential damages, arising out of your use or inability to use the services or products offered by the Company or the breach of any of these Terms by you or by any third party; (ii) any security risk such as hacker attacks, loss of password, loss of private key, or similar; (iii) mistakes or errors in code, text, or images involved in the in any of the Available Information; or (iv) any information contained in the Available Information or any expectation promise representation or warranty arising (or purportedly arising) therefrom; (v) any losses resulting from the volatility in pricing of Coins, Tokens, Cryptocurrency, Virtual/Digital Currency or other currency in any countries and on any exchange or market (regulated, unregulated, primary, secondary or otherwise);  (vi) any losses or damages arising out of or in connection with the purchase, use, sale or otherwise of the Coins, Tokens, Cryptocurrency, Virtual/Digital Currency or other currency; or (vii) arising out of or in any way connected to your failure to properly secure any private key to a wallet containing Coins, Tokens, Cryptocurrency, Virtual/Digital Currency or other currency, (collectively, the “Excluded Liability Matters”).`}
                            </Typography>
                            <Box component="br" />
                            <Typography color="textSecondary">
                                {`The Available Information is provided on an “as is” basis and without any warranties of any kind, either expressed or implied. You assume all responsibility and risk with respect to your use of the Available Information and purchasing of any amount of Coins, Tokens, Cryptocurrency, Virtual/Digital Currency and their use. If applicable law does not allow all or any part of the above limitation of liability to apply to you, the limitations will apply to you only to the maximum extent permitted by applicable law.  To the maximum extent permitted by applicable law, you hereby irrevocably and unconditionally waive: (i) all and any claims (whether actual or contingent and whether as an employee, office holder, trustee or in any other capacity whatsoever or howsoever arising) including, without limitation, claims for or relating to the Excluded Liability Matters, any payment or repayment of monies, indemnity or otherwise that you may have against the Company or against any of the Company Representatives; and (ii) release and discharge the Company and all of the Company Representatives from any and all liability (of whatsoever nature or howsoever arising) it or they may have to you. If for any reason you hereafter bring or commence any action or legal proceeding in respect of any claim purported to be released and discharged pursuant to this paragraph or these Terms, or otherwise attempt to pursue any such claim against the Company or any Company Representative then you hereby irrevocably and unconditionally undertake to indemnify, and keep indemnified the Company and all Company Representatives fully on demand from and against: (a) all liabilities or losses suffered by the Company or any Company Representative; and (b) all reasonable costs, charges and reasonable expenses (including without limitation reasonable legal costs and expenses) reasonably and properly incurred by the Company or any Company Representative, in each case by reason of or in connection with the bringing or commencement of such action or pursuit of such claim by you.  If any provision or part-provision of this “Legal Considerations, Risks and Disclaimer” section is or becomes invalid, illegal or unenforceable, it shall be deemed modified to the minimum extent necessary to make it valid, legal and enforceable. If such modification is not possible, the relevant provision or part-provision shall be deemed deleted. Any modification to or deletion of a provision or part-provision under this “Legal Considerations, Risks and Disclaimer” section shall not affect the validity and enforceability of the rest of this “Legal Considerations, Risks and Disclaimer” section.`}
                            </Typography>
                            <Box component="br" />
                            <Box component="br" />
                            <Typography color="secondary">
                                {`NO REPRESENTATION & WARRANTIES`}
                            </Typography>
                            <Typography color="textSecondary">
                                {`The Company does not make or purport to make, and hereby disclaims, any representation, warranty or undertaking in any form whatsoever to any entity or person, including any representation, warranty or undertaking in relation to the truth, accuracy and completeness of any of the information set out in the Available Information.`}
                            </Typography>
                            <Box component="br" />
                            <Box component="br" />
                            <Typography color="secondary">
                                {`REPRESENTATION & WARRANTIES BY YOU`}
                            </Typography>
                            <Typography color="textSecondary">
                                {`By howsoever accessing and/or accepting possession or communication of all or any part of the Available Information, you represent and warrant (and shall be deemed to represent and warrant) to the Company on the date of such access or on the latest date on which you retain possession of all or any part of the Available Information as follows:  (a) you are over 18 (eighteen) years of age; (b) you agree and acknowledge that the Available Information does not constitute a prospectus or offer document of any sort and is not intended to constitute an offer of securities in any jurisdiction or a solicitation for investment in securities and you are not bound to enter into any contract or binding legal commitment (c) you agree and acknowledge that no regulatory authority has examined or approved of the Available Information, no action has been or will be taken under the laws, regulatory requirements or rules of any jurisdiction and the publication, distribution or dissemination of all or any part of the Available Information to you does not imply that the applicable laws, regulatory requirements or rules have been complied with; (d) you have a basic degree of understanding of the operation, functionality, usage, storage, transmission mechanisms and other material characteristics of cryptocurrencies, blockchain based software systems, cryptocurrency wallets or other related token storage mechanisms, blockchain technology and smart contract technology; (e) you agree and acknowledge that the Company is not liable for any indirect, special, incidental, consequential or other losses of any kind, in tort, contract or otherwise (including but not limited to loss of revenue, income or profits, or loss of use or data, or loss of reputation, or loss of any economic or other opportunity of whatsoever nature or howsoever arising), arising out of or in connection with any acceptance of or reliance on the Available Information or any part thereof by you; and (f) all of the above representations and warranties are true, complete, accurate and not misleading from the time of your last access to and/or possession of (as the case may be) the Available Information.`}
                            </Typography>
                            <Box component="br" />
                            <Box component="br" />
                            <Typography color="secondary">
                                {`CAUTIONARY NOTE ON FORWARD-LOOKING STATEMENTS`}
                            </Typography>
                            <Typography color="textSecondary">
                                {`All statements contained in the Available Information, statements made in any press releases or in any place accessible by the public and oral statements that may be made by the Company or the Company Representatives (as the case may be), that are not statements of historical fact, constitute “forward looking statements”. Some of these statements can be identified by forward-looking terms such as “aim”, “target”, “anticipate”, “believe”, “could”, “estimate”, “expect”, “if”, “intend”, “may”, “plan”, “possible”, “probable”, “project”, “should”, “would”, “will” or other similar terms. However, these terms are not the exclusive means of identifying forward-looking statements. All statements regarding the Company’s financial position, business strategies, plans and prospects and the future prospects of the industry which the Company is in are forward-looking statements. These forward looking statements, including but not limited to statements as to a company’s revenue profitability and growth, expected revenue profitability and growth, prospects, future plans, other expected industry trends and their matters discussed in the Available Information regarding the Company are matters that are not historic facts, but only estimations and predictions. The Company makes no representation or warranty on having made any predictions or estimates or expectations on the basis of any formula, any mathematical or scientific modelling or forecast, or having made any due and proper enquiries or having undertaken any independent research or studies or otherwise. These forward-looking statements involve known and unknown risks, uncertainties and other factors that may cause the actual future results, performance or achievements of a company to be materially different from any future results, performance or achievements expected, expressed or implied by such forward-looking statements.  Given that risks and uncertainties that may cause the actual future results, performance or achievements of a company to be materially different from that expected, expressed or implied by the forward-looking statements in the Available Information, undue reliance must not be placed on these statements.  Nothing contained in the Available Information is or may be relied upon as a promise, representation or undertaking as to the future performance.  Further, the Company disclaims any responsibility to update any of those forward-looking statements or publicly announce any revisions to those forward-looking statements to reflect future developments, events or circumstances, even if new information becomes available or other events occur in the future.`}
                            </Typography>
                            <Box component="br" />
                            <Box component="br" />
                            <Typography color="secondary">
                                {`RISK FACTORS`}
                            </Typography>
                            <Typography color="textSecondary">
                                {`You should carefully consider and evaluate all risk factors and all other information contained in these Terms before deciding to participate in CryptoConsultz LLC services. All risk factors which are material to you in making an informed judgment to participate in cryptocurrency, digital/virtual currency, Token sales and blockchain technology should be evaluated by the customer.  The Company takes no liability for such risk.`}
                            </Typography>
                            <Box component="br" />
                            <Box component="br" />
                            <Typography color="secondary">
                                {`PRIVACY POLICY`}
                            </Typography>
                            <Typography color="textSecondary">
                                {`By using the Company’s website and/or participating in the Company’s services, you agree to your personal data, (i.e., your e-mail address, name, address and other details personal to you) being processed by the Company for its business purposes or the purposes of building, promoting, and communicating (about) the Company’s business platform. The Company agrees to keep your email address and other personal data private and not share it with the public (e.g., by selling to any third parties).`}
                            </Typography>
                            <Box component="br" />
                            <Box component="br" />
                            <Typography color="secondary">
                                {`RESTRICTIONS ON DISTRIBUTION AND DISSEMINATION OF THE AVAILABLE INFORMATION`}
                            </Typography>
                            <Typography color="textSecondary">
                                {`The distribution or dissemination howsoever of all or any part of the Available Information may be prohibited or restricted by the laws, regulatory requirements and rules of certain jurisdictions. In the case where any such restriction applies, you are responsible for informing yourself in respect of the same and for observing any such restrictions which are applicable to your possession and/or dissemination of all or any part of the Available Information at your own expense and without liability to the Company.  Persons to whom a copy of all or any part of the Available Information which has been distributed or disseminated, provided access to or who otherwise have all or any part of the Available Information in their possession shall not circulate it to any other persons, reproduce or otherwise distribute any information contained herein for any purpose whatsoever nor permit or cause the same to occur.`}
                            </Typography>
                            <Box component="br" />
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </Box>
    )
}

export default Terms;