import { Injectable } from '@angular/core';
import { Meeting } from '../type/meeting.model';

@Injectable({
  providedIn: 'root',
})
export class MeetingService {
  meetings: Meeting[] = [];
  nextId: number = 1;

  constructor() {}

  getMeetings(): Meeting[] {
    return this.meetings;
  }

  addMeeting(meeting: Meeting): void {
    meeting.id = this.nextId++;
    meeting.status = 'Booked';
    this.meetings.push(meeting);
  }

  deleteMeeting(id: number): void {
    this.meetings = this.meetings.filter((meeting) => meeting.id !== id);
  }

  getMeetingStatus(room: string, time: string): string {
    debugger;
    const meeting = this.meetings.find(
      (m) => m.room === room && m.startTime <= time && m.endTime >= time
    );
    return meeting ? meeting.status : 'Available';
  }
}
