		//ADD ITEM
$('button#add').on('click',function(){
		//get input's value
	var addTask = $("#add-task").val();
		console.log(addTask);
		//check for empty value
		if(addTask ==='') {
		//show alert message
		$('.empty').html('<span class="goodMess">Please, enter your new task!</span>').fadeIn('slow').delay(2000).fadeOut();
			//hide success message
	$('.success').hide();
		}else{
			$('.success').html('<span class="goodMess">New task was added!</span>').fadeIn('slow').delay(1000).fadeOut();

			//hide warning
			$('.empty').hide();
		//generate and add new list item
	var newLi = '<li class="list-group-item newTask incomplete-task"">';
		newLi += '<div class="checkbox">';
		newLi += '<label class="checkboxLabel"><input type="checkbox" id="checkbox"/>';
		newLi += '<span class="glyphicon glyphicon-ok"></span></label>';
		newLi += '<input type="text" value="'+ addTask +'" class="inp"></div>';
		newLi += '<div class="pull-right action-buttons col-md-4">';
		newLi +='<div class="editButtons">'
		newLi +='<button class="save"></button>'
		newLi +='<button class="close"></button>'
		newLi +='<span id="pencil" class="glyphicon glyphicon-pencil"></span>'
		newLi +='<span class="glyphicon glyphicon-remove"></span>'
		newLi +='</div>'
		newLi +='</div></li>'

	$(newLi).insertAfter($('form'));
		countTaskOther();
		countTask();
       	$('.inputTask').val(addTask);
		$('#add-task').val('');
		return false;
		};
	});
$('.save').hide();
$('.close').hide();
		//EDIT TASK
		$('ul').on('click', '.glyphicon-pencil',function(){
			var parent = $(this).parent().parent();
			parent.find('.save').html("Save").fadeIn('slow');
			parent.find('.close').html("Close").fadeIn('slow');
			parent.find('.glyphicon-pencil').hide();
			parent.find('.glyphicon-remove').hide();
		});

		$('ul').on('click', '.close',function(){
			var parent = $(this).parent().parent();
			parent.find('.glyphicon-remove').show();parent.find('.glyphicon-pencil').show();
			parent.find('.save').hide();
			parent.find('.close').hide();
		});

		$('ul').on('click', '.save',function(){
			var parent = $(this).parent().parent();
				if (!parent.hasClass('editMode')) {
					parent.addClass('editMode');
				}else if (parent.hasClass('editMode')) {	
			var editTask = $(this).find('.inp').val();// новое получамое значение
			//var editLabel = parent.find('label');
			// var editLabel = "";
			// console.log(editTask);// новое получамое значение
			// console.log(editLabel);//ssd
			//console.log($(editLabel).html(editTask));
			//console.log(editTask);
			parent.removeClass('editMode');
		};
		$('.save').hide();
		$('.close').hide();
		parent.find('.glyphicon-pencil').show();
		parent.find('.glyphicon-remove').show();
});

		//COMPLETE TASK
	$('ul').on('change','input[type="checkbox"]', function(){
		var parent = $(this).parent().parent().parent();
		if(parent.hasClass("completed-task")){
		parent.find('.inp').removeClass("text-decor");
		parent.removeClass("completed-task").addClass("incomplete-task");
			  countTaskOther();countTaskOther()
		}else{
		parent.find('.inp').addClass("text-decor");
		parent.removeClass("incomplete-task").addClass("completed-task");
			}
		countTaskOther();
			 countTask();
		});

		//DELETE TASK ?// не могу понять почему через hover не работает
		$('ul').on('click','.glyphicon-remove',function(){
		$(this).parent().parent().remove();
			countTaskOther();
			countTask();
		});

		//DELETE ALL completed-tasks    
		$('#removeAllChecked').on('click',function(){
		console.log($(".completed-task").remove());
			countTaskOther();
			countTask();
		});

		//TASK COUNTER
		function countTask(){
		var remainTask = $('li.completed-task').length;
		$('#counter').hide().fadeIn(300).html(remainTask);
		var remainTask1 = $('li.incomplete-task').length;
		$('#counterIncomplete').hide().fadeIn(300).html(remainTask1);
	};
		countTask();
	 	function countTaskOther(){
		var remainTask1 = $('li.incomplete-task').length;
		$('#counterIncomplete').hide().fadeIn(300).html(remainTask1);
	};
	 countTaskOther();

		// All, Active, Completed buttons
		$('#completed').on('click',function(){
		$(".completed-task").show();
		$(".incomplete-task").hide();
		});
		$('#active').on('click',function(){
		$(".completed-task").hide();
		$(".incomplete-task").show();
		});
		$('#all').on('click',function(){
		$(".completed-task").show();
		$(".incomplete-task").show();
		});


	