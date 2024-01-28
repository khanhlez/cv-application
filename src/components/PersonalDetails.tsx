import { FormEvent } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {ChangeDataPayload, PersonalDetailsProps} from "@/interfaces";

const PersonalForm = ({
  data,
  handleChange,
}: PersonalDetailsProps) => {
  const { fullName, email, phoneNumber, address } = data;
  const handleChangePersonalInfo = (
    e: FormEvent<HTMLInputElement>,
    dataName: string,
  ) => {
    const payload: ChangeDataPayload = {
      type: "personalInfo",
      key: dataName,
      value: e.currentTarget.value,
    }
    handleChange(payload);
  };

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Personal Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full items-center gap-1.5 mb-4">
            <Label htmlFor="fullName">Full name</Label>
            <Input
              type="text"
              id="full-name"
              placeholder="Full name"
              value={fullName}
              onChange={(e) => handleChangePersonalInfo(e, "fullName")}
            />
          </div>
          <div className="w-full items-center gap-1.5 mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => handleChangePersonalInfo(e, "email")}
            />
          </div>
          <div className="w-full items-center gap-1.5 mb-4">
            <Label htmlFor="phone number">Phone number</Label>
            <Input
              type="text"
              id="phone number"
              placeholder="Phone number"
              value={phoneNumber}
              onChange={(e) => handleChangePersonalInfo(e, "phoneNumber")}
            />
          </div>
          <div className="w-full items-center gap-1.5">
            <Label htmlFor="address">Address</Label>
            <Input
              type="text"
              id="address"
              placeholder="Address"
              value={address}
              onChange={(e) => handleChangePersonalInfo(e, "address")}
            />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default PersonalForm;
