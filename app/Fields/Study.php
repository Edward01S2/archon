<?php

namespace App\Fields;

use Log1x\AcfComposer\Field;
use StoutLogic\AcfBuilder\FieldsBuilder;

class Study extends Field
{
    /**
     * The field group.
     *
     * @return array
     */
    public function fields()
    {
        $study = new FieldsBuilder('study', [
            'position' => 'side'
        ]);

        $study
            ->setLocation('post_type', '==', 'study');

        $study
            ->addText('link title');

        return $study->build();
    }
}
