package com.Nisal.COR;

public class TeamLeader extends LeaveHandler {

    @Override
    public String applyLeave(Leave leave) {

        //"reasonType" is not going to be consider under TeamLeader & ProjectManager
        //Team Leader can approve up to 7 days, otherwise it will pass to the project manager
        if(leave.getNumberOfDays() <= 7){
            //Employee tier should be 4 or above to get approved
            if(leave.getEmpTier() <= 4){
                return "Your leave days has been APPROVED by TeamLeader";
            }else{
                return "You employee Tier level is too low for request " + leave.getNumberOfDays() + " days";
            }
        }else{
            return superVisor.applyLeave(leave);
        }
    }
}