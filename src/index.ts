import { buildPastTwoWeeks } from "./time";

export const ISSUE_LABELS = {
    VALIDATED: "validated",
    READY_TO_SIGN: "ready to sign",
    GRANTED: "granted",
    VERIFIED_CLIENT: "verified client",
    ONE_NOTARY_DECLINED: "one notary declined",
    WAITING_FOR_CLIENT_REPLY: "waiting for client reply",
    START_SIGN_DATACAP: "start sign datacap",
    EFIL_PLUS: "efil+",
    ERROR: "error",
    TOTAL_DC_REACHED: "total datacap reached",
    REVIEW_NEEDED: "governance review needed",
    VERY_LARGE_APPLICATION: "very large application",
    KYC_LABEL: "KYC-Validated",
    DATA_TYPE_OPEN_PUBLIC: "data type: open public",
    DATA_TYPE_COMMERCIAL_PUBLIC: "data type: commercial public",
    DATA_TYPE_PRIVATE: "data type: private",
    DC_REMOVE_REQUEST: "DcRemoveRequest",
    DC_REMOVE_READY_TO_SIGN: "DcRemoveReadyToSign",
    DC_REMOVE_NOTARY_PROPOSED: "notaryProposed",
    DC_REMOVE_NOTARY_APPROVED: "notaryApproved",
    DC_REMOVE_RKH_PROPOSED: "rkhProposed",
    DC_REMOVE_RKH_APPROVED: "rkhApproved",
    DC_REMOVE_COMPLETED: "removalCompleted",
};


//issue open: DcRemoveRequest (to never be removed)
// RKH due diligence is done: DcRemoveReadyToSign (to be removed only at the end)
// 1st notary propose: notaryProposed
// 2nd notary approve: notaryApproved
// 1st RKH propose: rkhProposed
// 2nd RKH approve: rkhApproved
// Sentry Events
enum BlockchainSentryEvents {
    RequestProposed = "Request Proposed",
    ProposalFailed = "Proposal Failed",
    RequestApproved = "Request Approved",
    ApprovalFailed = "Approval Failed",
}

// Sentry Events
enum UserSentryEvents {
    GithubLoginSuccess = "Github Login Success",
    LoadedGithubTokenSuccessfully = "Loaded Github Token Successfully",
    LedgerLoginSuccessful = "Ledger Login Successful",
    LedgerLoginFailed = "Ledger Login Failed",
}

const common = {
    ISSUE_LABELS,
    UserSentryEvents,
    BlockchainSentryEvents,
    buildPastTwoWeeks
};

export default common;

// Happy Scenario
// 1. Start Application  -- client
// -- Application [Validated]
// 2. Governance Team Start Allocation -- filecoin gt
// -- Application [Ready To Sign]
// 3. Notary Signs (proposal + comment)
// -- Application [Start Sign Datacap]
// 4. Notary Signs (approval + comment) (approval)
// -- Application [Application Granted, Verified Client]

// Request More Info Scenario
// 1. Start Application
// -- Application [Validated]
// 2. Governance Team Start Allocation -- filecoin gt
// -- Application [Ready To Sign]
// 4. Notary Request More Info
// -- Application [Ready To Sign, Waiting For Client Reply]
// 5. Client Replies(no template)
// -- we dont change labels, but increase counter in fe dashboard(fetch only last 7 days)
// 6. Notary Accepts
// -- Application [Ready To Sign, Start Sign Datacap]
// 7. Notary Request More Info
// -- Application [Waiting For Client Reply, Start Sign Datacap, Ready
// To Sign]
// 8. Client Replies
// 9. Notary Accepts
// -- Application [Application Granted, Verified Client]

// Decline V0.1 Scenario
// 1. Start Application
// -- Application [Validated]
// 2. Governance Team Start Allocation -- filecoin gt
// -- Application [Ready To Sign]
// 4. Notary Request More Info
// -- Application [Ready To Sign, Waiting For Client Reply]
// 5. Client Replies(no template)
// -- we dont change labels, but increase counter in fe dashboard(fetch only last 7 days)
// 6. Notary Decline
// -- Application [One Notary Declined, Ready To Sign]
// 7. Notary Request More Info
// -- Application [Waiting For Client Reply, Ready To Sign, One Notary
// Declined]
// 8. Client Replies
// 9. Notary Accepts
// -- Application [Application Granted, Verified Client, One Notary
// Declined]

// Error Scenario
// 1. Invalid address - add label "Error" and comment "Invalid address"
// 2. if issue main comment is modified - validate issue again
//

//
// Esraa
// Happy Scenario
// 1. Start Application
// -- Application [Validated]
// 2. Governance Team Start Allocation -- filecoin gt
// -- Application [Validated, Notary Review Needed]
// 2. Notary Signs
// -- Application [Validated, Notary Review Needed, Notary Proposed]
// 3. Notary Signs
// -- Application [Validated, Application Granted]

// -- Application [Validated, Notary Proposed(Start Signdatacap)]
// NOTES FOR ESRAA (TODO) :
// if Otherreason is selected - input should be required
// Client Verified should be whitelisted label
// Refer to comment template in message
// Remove comment template for client and change counter in fe to count only comments posted by person who open the issue &&  notary is waiting for more evidence(Notary Review Needed)

// Action points
//  - publish package with correct labels to npm (esraa) (blocker)
//  - integrate with LDN and FE (esraa)
//  - integrate with SSA (fabri)
//  - Script for issue state (fabri)

//  Goal = Finish 19th Of April
