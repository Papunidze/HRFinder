import { rest } from "@/lib/request";
import * as t from "io-ts";
import { group } from "../groups/groups-api";

export const MembersResponse = t.type({
  status: t.literal("success"),
  group: group,
});

export type MembersForm = {
  membersID?: string;
  id: string;
  about: string;
  experience: string;
  education: string;
  skills: string[];
  availability: string;
  location: string;
  birthday: string;
  email: string;
  mobile: string;
  name: string;
  avatar: string;
  role: string;
};

export const AddMembers = ({
  id,
  about,
  email,
  experience,
  education,
  skills,
  availability,
  location,
  birthday,
  mobile,
  name,
  avatar,
  role,
}: MembersForm) =>
  rest
    .post(`/group/${id}/add-member`, {
      about,
      email,
      experience,
      education,
      skills,
      availability,
      location,
      birthday,
      mobile,
      name,
      avatar,
      role,
    })
    .decode(MembersResponse);

export const updateMember = ({
  membersID,
  about,
  email,
  experience,
  education,
  skills,
  availability,
  location,
  birthday,
  mobile,
  name,
  avatar,
  role,
}: MembersForm) =>
  rest
    .put(`/group/update-member${membersID}`, {
      about,
      email,
      experience,
      education,
      skills,
      availability,
      location,
      birthday,
      mobile,
      name,
      avatar,
      role,
    })
    .decode(MembersResponse);
