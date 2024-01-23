import FriendInvitation from "../../models/friendInvitation.js";
import {updateFriendsPendingInvitations} from "../../socketHandlers/updates/friends.js";

const postReject = async (req, res) => {
  try {
    const { id } = req.body;
    const { userId } = req.user;
    const invitationExists = await FriendInvitation.exists({ _id: id });
    if(invitationExists){
        await FriendInvitation.findByIdAndDelete(id);
    }

    updateFriendsPendingInvitations(userId);
    return res.status(200).send('Invitation successfullt rejected!')

  } catch (err) {
    console.log(err);
    return res.status(500).send("Something went wrong please try again!");
  }
};

export default postReject;
