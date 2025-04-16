"use client";

import { Label } from "@radix-ui/react-label";
import { Plus } from "lucide-react";
import { Button } from "../button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../dialog";
import { Input } from "../input";
import { useState } from "react";
import { ConstituentInput } from "@/types/constituents";
import { toast } from "sonner";
import styles from "./constituentDialog.module.css";
import { useRouter } from "next/navigation";

export const ConstituentDialog = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const handleSubmit = async () => {
    console.log("inside handleSubmit");
    const newConstituent: ConstituentInput = {
      email,
      address,
      name,
    };

    const res = await fetch("http://localhost:3000/constituents/", {
      method: "POST",
      body: JSON.stringify(newConstituent),
    });

    if (!res.ok) {
      setError(await res.json());
      toast.error("Error submitting constituent.");
    } else {
      setOpen(false);
      toast.success("Constituent has been created.");
      router.refresh();
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className={styles.buttonContainer}>
        <DialogTrigger asChild>
          <Button variant="secondary" className={styles.button}>
            <Plus />
            Create
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Constituent</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formInput}>
              <Label htmlFor="email">Email: </Label>
              <Input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.formInput}>
              <Label htmlFor="name">Name: </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.formInput}>
              <Label htmlFor="name">Address: </Label>
              <Input
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </form>
          <DialogFooter>
            <Button type="submit" onClick={handleSubmit}>
              Save changes
            </Button>
          </DialogFooter>
          <div className={styles.errorContainer}>
            <span className={styles.error}>{error}</span>
          </div>
        </DialogContent>
      </div>
    </Dialog>
  );
};
