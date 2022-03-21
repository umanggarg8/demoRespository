import { LightningElement,api,track,wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import getOpportunities from '@salesforce/apex/OpportunitiesController.getOpportunities';


export default class contractContactManager extends LightningElement {
  @track error;
  @track cons = [];
  @track selectedConIds;
  @track showConLookup = false;
  @track opps = [];
  @track showOppLookup = false;
  @track selectedOppsIds;

  // handel custom lookup component event 
    lookupRecord(event){
        alert('Selected Record Value on Parent Component is ' +  JSON.stringify(event.detail.selectedRecord));
    }

    @wire(getContacts)
    wcons({error,data}){
        if(data){
            for(let i=0; i<data.length; i++){
                let obj = {id: data[i].Id, value: data[i].LastName, icon:'standard:contact'};
                this.cons.push(obj);
            }
            this.showConLookup = true;
        }else{
            this.error = error;
        }       
    }
 
   //On Contacts selection/clear
   handleContactChange(event){
        let cons = event.detail;
        this.selectedConIds = '';
        cons.forEach(con => {
            this.selectedConIds += con.id+'; ';
        });
    }

    @wire(getOpportunities)
    wOpps({error,data}){
        if(data){
            for(let i=0; i<data.length; i++){
                let obj = {id: data[i].Id, value: data[i].Name, icon:'standard:opportunity'};
                this.opps.push(obj);
            }
            this.showOppLookup = true;
        }else{
            this.error = error;
        }       
    }
 
   //On Opportunities selection/clear
   handleOppsChange(event){
        let opps = event.detail;
        this.selectedOppsIds = '';
        opps.forEach(opp => {
            this.selectedOppsIds += opp.id+'; ';
        });
    }
}