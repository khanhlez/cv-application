import { FormEvent } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { PersonalDetailsProps } from "@/interfaces";

const PersonalForm = ({
  data,
  handleChangePersonalDetails,
}: PersonalDetailsProps) => {
  const { fullName, email, phoneNumber, address } = data;
  const handleChangeData = (
    e: FormEvent<HTMLInputElement>,
    dataName: string,
  ) => {
    console.log(11111);
    handleChangePersonalDetails(dataName, e.currentTarget.value);
  };

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Personal Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
            <Label htmlFor="fullName">Full name</Label>
            <Input
              type="text"
              id="full-name"
              placeholder="Full name"
              value={fullName}
              onChange={(e) => handleChangeData(e, "fullName")}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => handleChangeData(e, "email")}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
            <Label htmlFor="phone number">Phone number</Label>
            <Input
              type="text"
              id="phone number"
              placeholder="Phone number"
              value={phoneNumber}
              onChange={(e) => handleChangeData(e, "phoneNumber")}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="address">Address</Label>
            <Input
              type="text"
              id="address"
              placeholder="Address"
              value={address}
              onChange={(e) => handleChangeData(e, "address")}
            />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default PersonalForm;
