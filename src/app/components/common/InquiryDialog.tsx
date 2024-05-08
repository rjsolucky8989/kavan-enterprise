import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function InquiryDialog({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  const [value, setValue] = useState<any>();
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries((formData as any).entries());
          const email = formJson.email;
          console.log(email);
          handleClose();
        },
      }}
    >
      <DialogTitle>Request a Quote</DialogTitle>
      <DialogContent>
        <DialogContentText className="mb-5">
          <b>Get Latest Price</b> and details from{" "}
          <b>&ldquo;Kavan Enterprise&rdquo;</b> on your mobile quickly
        </DialogContentText>
        <PhoneInput
          placeholder="Enter phone number"
          country="in"
          value={value}
          onChange={setValue}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Submit</Button>
      </DialogActions>
    </Dialog>
  );
}
