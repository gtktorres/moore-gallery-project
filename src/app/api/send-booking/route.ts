import { ReserveKit } from 'reservekitjs';

const reservekit_api_key = process.env.RESERVE_KIT_API_KEY;

export async function POST(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.json({message: 'Method Not Allowed'});       
  }

  const { name, email } = req.body;

  try {
    
    const client = reservekit_api_key ? await ReserveKit.create(reservekit_api_key, 1) : null; // Set your SendGrid API key
    const bookingService = client?.service; // Get the booking service

    if(bookingService) {
        const timeSlots = await bookingService.getTimeSlots(); // Get available time slots
      //Get available slots
      const timeSlotsLength = timeSlots.length;

      if (timeSlotsLength > 0) {
        const booking = await bookingService.createBooking({
          customer_name: name,
          customer_email: email,
          date: new Date().toISOString().split('T')[0], // Use today's date
          time_slot_id: timeSlots[0].id
        });
        res.status(200).send('Booking created successfully!');
        // Log the booking details
        console.log('Booking created:', booking);
      }
    }
    } catch (error) {
      console.error(error);
      res.status(500).send('Error creating booking.');
    }
  }