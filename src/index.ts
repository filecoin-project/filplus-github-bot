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
    FIL_PLUS_STORAGE: "source:filplus.storage",
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
    buildPastTwoWeeks,
};

export default common;
