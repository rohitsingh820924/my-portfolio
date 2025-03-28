import React from "react";
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from "@mui/lab";
import { format } from 'date-fns';

type PaymentRecord = {
  startDate: string;
  endDate: string;
  totalTiffins: number;
  _id: string;
};

type PaymentTimelineProps = {
  paymentRecords: PaymentRecord[];
};

const PaymentTimeline: React.FC<PaymentTimelineProps> = ({ paymentRecords }) => {
  return (
<div className="overflow-y-auto h-[350px] no-scrollbar">
<Timeline
      sx={{
        [`& .MuiTimelineItem-root:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {paymentRecords?.map((record, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
          <TimelineDot className="!border-white !bg-white">
        <span className="flex items-center justify-center w-5 h-5 rounded-full text-teal-600 text-xs font-semibold">{record.totalTiffins}</span>
          </TimelineDot>
            {index !== paymentRecords.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
          <div className="space-y-1">
              <p className="flex items-center text-white text-sm font-bold gap-1"><span className="font-semibold">{format(new Date(record._id), 'dd-MMMM-yyyy')}</span></p>
              <p className="flex items-center text-white/75 text-xs gap-1"><span className="">{format(new Date(record.startDate), 'dd-MMMM-yyyy')}</span>-<span className="">{format(new Date(record.endDate), 'dd-MMMM-yyyy')}</span></p>
            </div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
</div>
  );
};

export default PaymentTimeline;
