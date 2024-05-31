require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const Internship = require('./models/Internship');

const app = express();
app.use(express.static(__dirname + '/public'));

//Connect database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

app.get('/', async (req, res) => {
  //   res.send('Server running');
  try {
    const internships = await Internship.find();
    res.json(internships);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

app.get('/internships/:id', async (req, res) => {
  try { 
    const internship = await Internship.findOne({
      _id: req.params.id,
    });
    if (!internship) {
      return res.status(400).json({ msg: 'Internship does not exist!' });
    }
    res.json(internship);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Internship does not exist!' });
    }
    res.status(500).send('Server Error');
  }
});


app.post('/filter',async(req,res)=>{
    const filters = req.body.filters;
    // console.log(filters);
    const internships = await Internship.find();
    let filtered = []
    internships.forEach((item) => {
        let tim = true
        if(filters?.timings){
            tim = ((filters?.timings.pt&&item.timings==="Part Time")||(filters?.timings.ft&&item.timings==="Full Time"));
            if(!filters?.timings.pt && !filters?.timings.ft){
              tim = true;
            }
        }
        let typ = true
        if(filters?.type){
            typ = ((filters?.type.wfh&&item.type==="Work from Home")||(filters?.type.io&&item.type==="In-Office"))
            if(!filters?.type.wfh && !filters?.type.io){
              typ = true;
            }
        }
        let dur = true
        if(filters?.duration){
            dur = (filters?.duration.min<=item.duration && item.duration<=filters?.duration.max)
        }
        let sti = true
        if(filters?.stipend){
            sti = (filters?.stipend.min<=item.stipend && item.stipend<=filters?.stipend.max)
        }
        let app = true
        if(filters?.applicantsNo){
            app = (filters?.applicantsNo.min<=item.applicantsNo && item.applicantsNo<=filters?.applicantsNo.max)
        }
        let cat = true
        if(filters?.category){
            cat = (filters?.category.includes(item.category))
        }
        let ski = true
        if(filters?.skills){
            ski = false;
            for(let i=0; i<item.skills.length; ++i) {
                if(filters?.skills.includes(item.skills[i])){
                    ski = true;
                    break;
                }
            }
        }
        let loc = true
        if(filters?.location){
            loc = (filters?.location.includes(item.location))
        }

        if(tim && typ && dur && sti && app && cat && ski && loc){
            filtered.push(item)
        }
    })
    // console.log(filtered)
    res.json(filtered)
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
