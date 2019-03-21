
$(document).ready(function () {
	var variable = '[{"Mode":"VTU"}, {"Mode":"AUTONOMOUS"}, {"Mode":"DU"}]';
	var jsonArray = JSON.parse(variable);
	var branch_variable = '[{"Branch":"ISE"}, {"Branch":"CSE"}, {"Branch":"ECE"}]';
	var branch_jsonArray = JSON.parse(branch_variable);
		
		
	$( window ).load(function(){
		for (var i = 0; i < jsonArray.length; i++) {
			$("#university_id").append('<option value= '+jsonArray[i]["Mode"]+'>'+jsonArray[i]["Mode"]+'</option>');
		}
		for (var j = 0; j < branch_jsonArray.length; j++) {
			$("#branch_id").append('<option value="'+branch_jsonArray[j]+'">'+branch_jsonArray[j]["Branch"]+'</option>');
		}
	});
		
	$('#university_id').change(function() {
		var value = $( "#university_id" ).val();alert(value);
		var college_variable = {"VTU":["RNS","BMS","PES"],"AUTONOMOUS" : ["NITTE","AIT","RV"],"DU" : ["MSRIT","ABC","QSPIDER"]};
		
		$(value).find(college_variable){
			alert("hi");
		}
		if(value =="VTU"){
			for (var k in college_variable.VTU) {
				$("#college_id").append('<option>'+college_variable.VTU[k]+'</option>');
			}
		}
		
		if(value =="AUTONOMOUS"){
			for (var l in college_variable.AUTONOMOUS) {
				$("#college_id").append('<option>'+college_variable.AUTONOMOUS[l]+'</option>');
			}
		}
		
		if(value =="DU"){
			for (var m in college_variable.DU) {
				$("#college_id").append('<option>'+college_variable.DU[m]+'</option>');
			}
		}
	});
		
			
});

