import HostBackground from "./HostBackground";
import XTRA from "../Common/XTRA";
import ButtonsRow from "../Common/ButtonsRow";

export default function HostPage() {
  return (
    <>
      <HostBackground />
      <XTRA />

      <ButtonsRow isHost={true} />
    </>
  );
}
