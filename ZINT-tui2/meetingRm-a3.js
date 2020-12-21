/*
  input[] meeting name, num of attendees, start time, end time
       [] room, occupancies
  output[] ___ meeting: ___ room
  return string 'impossible' if not possibel to schedule

  ex:
  input: [['product discussion', 5, 1300, 1400], ['product discussion', 5, 1300, 1400]]

  meeting = [['product discussion', 10, 1300, 1400], ['happy hour', 5, 1500, 1630], ['stand up', 6, 1000, 1030], ['vendor', 4, 1010, 2000]]
  room = [['seattle', 10], ['Chicago',5], [LosAltos',20]];


*/

let meetingRoom = function(meetingInfo, rooms) {
  //priorityqueue？
  // time and headcount constraints will -> impossible
};