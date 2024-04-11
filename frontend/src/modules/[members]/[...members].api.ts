import { rest } from "@/lib/request";
import * as t from "io-ts";

const Member = t.type({
  _id: t.string,
  name: t.string,
  avatar: t.string,
  email: t.string,
  about: t.string,
  education: t.string,
  availability: t.string,
  location: t.string,
  birthday: t.string,
  mobile: t.string,
  skills: t.array(t.string),
  experience: t.string,
  role: t.string,
});

export const MembersResponse = t.type({
  status: t.literal("success"),
  member: Member,
});

export const getMemberById = ({ id }: { id: string }) =>
  rest.get(`/group/member/${id}`).decode(MembersResponse);
