import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MeetingService } from '../../service/meeting.service';

@Component({
  selector: 'app-book-meeting',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookMeetingComponent implements OnInit {
  bookMeetingForm: FormGroup;
  meetings: any[] = [];
  rooms: any[] = [
    { label: 'Meeting Room #1', value: 'Meeting Room #1' },
    { label: 'Meeting Room #2', value: 'Meeting Room #2' },
    { label: 'Meeting Room #3', value: 'Meeting Room #3' },
    { label: 'Meeting Room #4', value: 'Meeting Room #4' },
    { label: 'Meeting Room #5', value: 'Meeting Room #5' },
    { label: 'Meeting Room #6', value: 'Meeting Room #6' },
    { label: 'Meeting Room #7', value: 'Meeting Room #7' },
    { label: 'Meeting Room #8', value: 'Meeting Room #8' },
    { label: 'Meeting Room #9', value: 'Meeting Room #9' },
    { label: 'Meeting Room #10', value: 'Meeting Room #10' }
  ];
  displayBookModal: boolean = false;
  displayDeleteModal: boolean = false;
  selectedMeeting: any;
  myMeetings:any;
loginUser:any;

  constructor(private fb: FormBuilder,private router: Router,public meetingService:MeetingService) {
    this.bookMeetingForm = this.fb.group({
      username: ['', Validators.required],
      agenda: ['', Validators.required],
      date: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      room: ['', Validators.required]
    });
  }

ngOnInit(): void {
  
  this.loadMeetings()
}

loadMeetings(){
  this.loginUser=localStorage.getItem('username')
  this.meetings=this.meetingService.getMeetings()
  this.myMeetings = this.meetings.filter(res=>res.username==this.loginUser)

}
  openBookModal() {
    this.displayBookModal = true;
  }

  openDeleteModal(meeting: any) {
    this.selectedMeeting = meeting;
    this.displayDeleteModal = true;
  }

  onBookMeeting() {
    if (this.bookMeetingForm.valid) {
      this.meetingService.meetings.push(this.bookMeetingForm.value);
      this.loadMeetings()
      this.displayBookModal = false;
    }
  }

  onDeleteMeeting() {
    const index = this.meetings.indexOf(this.selectedMeeting);
    if (index > -1) {
      this.meetings.splice(index, 1);
    }
    this.loadMeetings()
    this.displayDeleteModal = false;
  }
  onLogout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
}
