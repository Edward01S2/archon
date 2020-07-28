<?php

namespace App\Fields\Partials;

use Log1x\AcfComposer\Partial;
use StoutLogic\AcfBuilder\FieldsBuilder;

class Form extends Partial
{
    /**
     * The partial field group.
     *
     * @return array
     */
    public function fields()
    {
        if(class_exists('gfapi')) {
            $forms = \GFAPI::get_forms();
            $choices= [];
            foreach($forms as $form) {
                $choices[] = [
                    $form['id'] => $form['title']
                ];
            }
        }

        $form = new FieldsBuilder('form');

        $form
            ->addSelect('form', [
                'label' => 'Select Form',
                'choices' => $choices,
                'return_format' => 'value',
        ]);

        return $form;
    }
}
