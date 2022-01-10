import React from "react";

import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/Grid';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';

import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';

import useStyles from "../assets/styles";

const Meetings = () => {
    const classes = useStyles();

    return (
        <Box className={classes.meetings}>
            <Container>
                <Box className={classes.pageHeader}>
                    <Typography variant="h3" className="title">
                        Meetings
                    </Typography>
                    <Breadcrumbs separator="-">
                        <Link
                            underline="none"
                            href="/"
                        >
                            Home
                        </Link>,
                        <Typography>
                            Meetings
                        </Typography>
                    </Breadcrumbs>
                </Box>
                <Box className="meetings">
                    <Typography color="secondary" variant="h5">
                        How do I connect with my CryptoConsultant for the meeting?
                    </Typography>
                    <Box component="br" />
                    <Typography color="textSecondary">
                        REKT uses Zoom for our virtual consulting sessions.  Upon completion of the intake form and payment, you will receive an email with meeting details.  You can connect to the meeting through the meeting link in the email or you can call in using the number listed in the meeting details email.
                    </Typography>
                    <Box component="br" />
                    <Typography color="textSecondary">
                        Please prepare for your meeting by downloading and connecting to Zoom through the link in your email.  If you prefer a video enabled meeting, please test your webcam prior to your meeting time.  REKT does not accommodate for client driven technical difficulties. Any issues you are having with your devices will impact the time you get to spend with your CryptoConsultant.
                    </Typography>
                    <Box component="br" />
                    <Typography color="textSecondary">
                        Virtual sessions are ideal as they can provide screen sharing opportunities for our customers.  While we make every attempt to provide virtual sessions, this benefit is not guaranteed.  During times of technical issues, it may not be possible for your consultant to participate through virtual session.  These circumstance are rare but inevitable as REKT relies on the performance of a third party platform.  In the event video or audio challenges arise, a telephone consult will be provided.
                    </Typography>
                    <Box component="br" />
                    <Typography color="secondary" variant="h5">
                        What if I need to reschedule my session?
                    </Typography>
                    <Box component="br" />
                    <Typography color="textSecondary">
                        You can reschedule your meeting <Box component="span" color="#FF0044">greater than 24 hours before your meeting time.</Box>  You must make this change in our scheduling system.  REKT is not responsible for cancelling or rescheduling appointment times for you.  You can do so by selecting the link in your meeting details email which is sent to you at the time of purchase.
                    </Typography>
                    <Box component="br" />
                    <Typography color="textSecondary">
                        <Box component="b">Rescheduling greater than 24 hours before your session time:</Box>
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ArrowRightRoundedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={{
                                        color: "textSecondary"
                                    }}
                                    primary="In your meeting confirmation email there is a link provided to reschedule your meeting.  You can use this to find a date/time that works."
                                />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ArrowRightRoundedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={{
                                        color: "textSecondary"
                                    }}
                                    primary="Please note, if you decide to reschedule, REKT does not guarantee additional session times will be available.  Due to high demand, there are times where the schedule is booked."
                                />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Box component="br" />
                    <Typography color="textSecondary">
                        <Box component="b">Cancelling greater than 24 hours before your session time:</Box>
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ArrowRightRoundedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={{
                                        color: "#FF0044"
                                    }}
                                    primary="You can cancel your appointment up to 24 hours before you scheduled appointment time.  REKT charges a $39 cancellation fee."
                                />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ArrowRightRoundedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={{
                                        color: "textSecondary"
                                    }}
                                    primary="Appointments scheduled longer than one hour will be charged additional fees.  Please see our terms of agreement for details."
                                />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ArrowRightRoundedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={{
                                        color: "textSecondary"
                                    }}
                                    primary="The cancellation fee will be deducted from your original payment amount and a refund will be issued for the remaining balance."
                                />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ArrowRightRoundedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={{
                                        color: "textSecondary"
                                    }}
                                    primary="In your meeting confirmation email there is a link provided to cancel your meeting.  "
                                />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ArrowRightRoundedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={{
                                        color: "textSecondary"
                                    }}
                                    primary="After you cancel your appointment, you can request a refund by completing our refund request form."
                                />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ArrowRightRoundedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={{
                                        color: "textSecondary"
                                    }}
                                    primary="Refunds will be issued as soon as possible, not to exceed 30 days from refund request, typically much sooner."
                                />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Box component="br" />
                    <Typography color="textSecondary">
                        <Box component="b">Rescheduling/Cancelling less than 24 hours before your session time:</Box>
                    </Typography>
                    <Box component="br" />
                    <Typography color="textSecondary">
                        <Box component="b">{"Rescheduling < 24 hours:"}</Box>
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ArrowRightRoundedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={{
                                        color: "#FF0044"
                                    }}
                                    primary="You cannot reschedule appointments less than 24 hours before your appointment time."
                                />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ArrowRightRoundedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={{
                                        color: "textSecondary"
                                    }}
                                    primary={`If you are not able to make an appointment please cancel it by accessing the link in your meeting details email.  Failure to do so before your appointment time will result in a "no show" appointment.  Please read "no show" appointment details below.  You will not receive a refund for "no show" appointments.`}
                                />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Box component="br" />
                    <Typography color="textSecondary">
                        <Box component="b">{"Cancelling < 24 hours:"}</Box>
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ArrowRightRoundedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={{
                                        color: "#FF0044"
                                    }}
                                    primary="Appointments cancelled less than 24 hours before scheduled session time are charged a $99 late cancellation fee."
                                />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ArrowRightRoundedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={{
                                        color: "textSecondary"
                                    }}
                                    primary="Appointments scheduled longer than one hour will be charged additional fees.  Please see our terms of agreement for details."
                                />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ArrowRightRoundedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={{
                                        color: "textSecondary"
                                    }}
                                    primary="The cancellation fee will be deducted from your original payment amount and a refund will be issued for the remaining balance."
                                />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ArrowRightRoundedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={{
                                        color: "textSecondary"
                                    }}
                                    primary="In your meeting confirmation email there is a link provided to cancel your meeting.  "
                                />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ArrowRightRoundedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={{
                                        color: "textSecondary"
                                    }}
                                    primary="After you cancel your appointment, you can request a refund by completing our refund request form."
                                />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ArrowRightRoundedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={{
                                        color: "textSecondary"
                                    }}
                                    primary="Refunds will be issued as soon as possible, not to exceed 30 days from refund request, typically much sooner."
                                />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ArrowRightRoundedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={{
                                        color: "textSecondary"
                                    }}
                                    primary="You are welcome to schedule another appointment with one of our consultants through our scheduling & payments link."
                                />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Box component="br" />
                    <Typography color="secondary" variant="h5">
                        What if I forget about my appointment?
                    </Typography>
                    <Box component="br" />
                    <Typography color="textSecondary">
                        <Box component="b">{`"No Show" Appointments`}</Box>
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ArrowRightRoundedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={{
                                        color: "textSecondary"
                                    }}
                                    primary={`Failure to call ahead and cancel an appointment is considered a "no show."`}
                                />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ArrowRightRoundedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={{
                                        color: "#FF0044"
                                    }}
                                    primary={`Refunds are not issued for "no show" appointments.`}
                                />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ArrowRightRoundedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={{
                                        color: "textSecondary"
                                    }}
                                    primary="If you no show an appointment you forfeit the appointment as well as any refund for that appointment."
                                />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ArrowRightRoundedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={{
                                        color: "textSecondary"
                                    }}
                                    primary="You may be given the opportunity to reschedule your appointment by paying a no show fee but this decision is based on schedule availability and is not guaranteed."
                                />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ArrowRightRoundedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={{
                                        color: "textSecondary"
                                    }}
                                    primary="You can submit a request for rescheduling through our refund request form."
                                />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ArrowRightRoundedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={{
                                        color: "textSecondary"
                                    }}
                                    primary="Continued no shows may result in termination of service as outlined in our terms."
                                />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Box component="br" />
                    <Typography color="secondary" variant="h5">
                        What if my consultant or I am late?
                    </Typography>
                    <Typography color="textSecondary">
                        At REKT we make every attempt possible to connect with our customers on time.  We do realize that sometimes life gets in the way.  We allow a 10 minute buffer in our meeting times to account for these bumps.
                    </Typography>
                    <Box component="br" />
                    <Typography color="textSecondary">
                        <Box component="b">{`If you are late:`}</Box>
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ArrowRightRoundedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={{
                                        color: "textSecondary"
                                    }}
                                    primary={`If you know you will be late, please call our support line and let us know you will be joining the meeting late.  From there, your options are as follows:`}
                                />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Box component="br" />
                    <Typography color="textSecondary">
                        <Box component="b">{`< 10 mins late`}</Box>
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ArrowRightRoundedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={{
                                        color: "textSecondary"
                                    }}
                                    primary={`Your consultant will wait on the call for you to arrive.  You can continue the session as scheduled but your session time will end at the scheduled time.  Your consultant will not be extending the meeting to account for tardiness.`}
                                />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Box component="br" />
                    <Typography color="textSecondary">
                        <Box component="b">{`> 10 mins late`}</Box>
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ArrowRightRoundedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={{
                                        color: "textSecondary"
                                    }}
                                    primary={`Your consultant will make one attempt to call you at the number you provided on your intake form.  From there, you can continue your session as described above.  If we are unable to reach you and/or conduct the scheduled your appointment is considered a "no show" appointment.  See "no show" section for details.`}
                                />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Box component="br" />
                    <Typography color="textSecondary">
                        <Box component="b">{`If your consultant is late:`}</Box>
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ArrowRightRoundedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={{
                                        color: "textSecondary"
                                    }}
                                    primary={`At REKT we expect our consultants to be on time to sessions.  Due to unforeseen circumstances, on the very rare occasion that your consultant is late, we will offer to compensate you for missed time.`}
                                />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Typography color="textSecondary">
                        <Box component="b">{`< 10 mins late`}</Box>
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ArrowRightRoundedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={{
                                        color: "textSecondary"
                                    }}
                                    primary={`Please wait on the line for your consultant to arrive and/or call our support line.  You will be given the option to extend your session time by 15 minutes or will be provided a free 15 minute consultation session to schedule at a future date.`}
                                />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Typography color="textSecondary">
                        <Box component="b">{`> 10 mins late`}</Box>
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ArrowRightRoundedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={{
                                        color: "textSecondary"
                                    }}
                                    primary={`Please call our support line immediately.  You may terminate the session and will be given one of the following options:`}
                                />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <IconButton style={{ fontSize: 12 }}>
                                        1
                                    </IconButton>
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={{
                                        color: "textSecondary"
                                    }}
                                    primary={`If available, you will be given the option to connect with another consultant to complete your session in full at that time.`}
                                />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <IconButton style={{ fontSize: 12 }}>
                                        2
                                    </IconButton>
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={{
                                        color: "textSecondary"
                                    }}
                                    primary={`You can reschedule your session at no additional charge for rescheduling.`}
                                />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <IconButton style={{ fontSize: 12 }}>
                                        3
                                    </IconButton>
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={{
                                        color: "textSecondary"
                                    }}
                                    primary={`You can decline the session and will be offered a full refund.`}
                                />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Box component="br" />
                    <Typography color="textSecondary">
                        We know your time is valuable.  If your consultant is more than 10 minutes late you will be provided a free 30 minute consultation session to schedule at a future date, regardless of which option you choose above.
                    </Typography>
                    <Box component="br" />
                    <Typography color="textSecondary">
                        Our aim is to avoid these rare circumstances.  Nonetheless, we seek to provide a high level of customer support should such unfortunate circumstances arise.
                    </Typography>
                    <Box component="br" />
                    <Typography color="secondary" variant="h5">
                        What if I have technical difficulties?
                    </Typography>
                    <Typography color="textSecondary">
                        It happens!  We've all been there.  For this reason, we give our customers two options for connecting with consultants.  You can connect by video/audio chat on Zoom or call in directly from your phone.   Zoom provides an option to call in by phone but you will need the session number ID to access the call.  This unique session number is listed in your meeting details email that was sent at the time of purchase.
                    </Typography>
                    <Box component="br" />
                    <Typography color="textSecondary">
                        <Box component="b">{`Can't find the number?`}</Box>
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ArrowRightRoundedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={{
                                        color: "textSecondary"
                                    }}
                                    primary={`Please call our support team at 971-808-2309.  Please note, we do not guarantee that a support member will be available before/during your meeting time.  It is your responsibility to prepare and connect to the meeting.  We recommend that you do so well in advance.  Still, we will do what we can to support your connectivity issues and guide you through the process.`}
                                />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Box component="br" />
                    <Typography color="textSecondary">
                        <Box component="span" color="#FF0044">Technical difficulties resulting in a customer joining a meeting late are still considered delayed meetings</Box>  Please see our session delays section for details.  You will not be provided extra time to compensate for delays in connecting to the meeting.
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default Meetings;