# 📅 Custom Event Calendar

A fully interactive, feature-rich **event scheduling calendar** built using **React.js**. This project is developed as a frontend assignment with the goal of managing events including support for recurrence, drag-and-drop rescheduling, and event conflict handling.

## 🎯 Objective

To allow users to:
- View a monthly calendar
- Add, edit, and delete events
- Handle recurring events
- Reschedule events using drag-and-drop
- Manage overlapping/conflicting events
- (Optional) Search and filter events

---

## 🚀 Features

### 📆 Calendar View
- Traditional **monthly view** calendar
- Highlights the **current day**
- Navigation between months

### ✍️ Event Management
- **Add Events** with:
  - Title
  - Date & time (with time picker)
  - Description
  - Recurrence options: Daily, Weekly, Monthly, Custom
  - Optional: Color/Category tags
- **Edit Events** via click
- **Delete Events** from calendar or detail view

### 🔁 Recurring Events
- Daily, weekly, monthly, and custom patterns
- Auto-rendered on appropriate days

### 🧲 Drag-and-Drop Rescheduling
- Move events across dates
- Automatically update start/end times


### 📱 Responsive Design
- Adapts calendar for mobile and tablet screens
- Optimized touch interactions

---

## 🛠️ Installation

### Requirements
- Node.js (v14+)
- npm or yarn

### Setup Instructions

```bash
# Clone the repository
git clone https://github.com/your-username/custom-event-calendar.git

# Navigate into project
cd custom-event-calendar

# Install dependencies
npm install

# Start development server
npm start
